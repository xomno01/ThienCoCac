import { GoogleGenAI, Type } from "@google/genai";
import { UserInfo, DivinationResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const consultTheOracles = async (userInfo: UserInfo): Promise<DivinationResult> => {
  const modelId = "gemini-2.5-flash"; // Fast and creative for text generation

  const prompt = `
    Bạn là một bậc thầy phong thủy, tướng số, Kinh Dịch và chiêm tinh học phương Đông thời xưa (như Gia Cát Lượng, Lưu Bá Ôn). 
    Người hỏi: ${userInfo.name}, sinh năm: ${userInfo.birthYear}, giới tính: ${userInfo.gender}.
    Vấn đề muốn xem: ${userInfo.category}.
    Câu hỏi cụ thể: "${userInfo.question}".

    Hãy gieo một quẻ Dịch và luận giải thiên cơ cho người này.
    
    Yêu cầu giọng điệu:
    - Cổ kính, trang trọng, huyền bí, sử dụng từ ngữ Hán Việt (như "bổn tọa", "thí chủ", "thiên thời", "địa lợi").
    - Nghiêm túc nhưng mang tính triết lý sâu sắc.

    Yêu cầu nội dung trả lời (trả về JSON):
    1. hexagramName: Tên quẻ Dịch ứng với hoàn cảnh (Ví dụ: Hỏa Thủy Vị Tế, Địa Thiên Thái...).
    2. poem: Một bài thơ thất ngôn tứ tuyệt (4 câu) bằng tiếng Việt (âm hưởng cổ) để tiên đoán vận mệnh.
    3. interpretation: Luận giải chi tiết về thiên tượng, thùy văn, nhân hòa liên quan đến câu hỏi. Giải thích ý nghĩa của quẻ.
    4. advice: Lời khuyên cụ thể cho hành động sắp tới.
    5. luckyElements: Phương hướng, màu sắc, con số may mắn phù hợp với quẻ này.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            hexagramName: { type: Type.STRING },
            poem: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            interpretation: { type: Type.STRING },
            advice: { type: Type.STRING },
            luckyElements: {
              type: Type.OBJECT,
              properties: {
                direction: { type: Type.STRING },
                color: { type: Type.STRING },
                number: { type: Type.STRING },
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Không thể luận giải thiên cơ lúc này.");
    
    return JSON.parse(text) as DivinationResult;

  } catch (error) {
    console.error("Lỗi khi xem bói:", error);
    // Fallback data in case of error to keep the app immersive
    return {
      hexagramName: "Sơn Thủy Mông",
      poem: [
        "Mây mù che phủ đỉnh sơn khê,",
        "Lối cũ đường xưa lạc lối về.",
        "Tĩnh tâm chờ đợi trăng soi sáng,",
        "Vội vã làm chi vướng não nề."
      ],
      interpretation: "Hiện tại tâm trí còn rối bời, sự việc chưa rõ ràng. Thiên cơ bất khả lộ, hoặc do tín chủ chưa đủ thành tâm, hoặc thời cơ chưa tới. Mọi sự đang trong giai đoạn mông lung (Mông).",
      advice: "Nên giữ nguyên hiện trạng, tu dưỡng nội tâm, không nên quyết định việc lớn trong lúc này. Chờ đợi thời cơ sáng sủa hơn.",
      luckyElements: {
        direction: "Bắc",
        color: "Đen, Xám",
        number: "1, 6"
      }
    };
  }
};
