export enum DivinationCategory {
  GENERAL = 'Vạn Sự (Tổng quan)',
  LOVE = 'Nhân Duyên (Tình cảm)',
  CAREER = 'Công Danh (Sự nghiệp)',
  CELESTIAL = 'Thiên Tượng (Thời vận)',
  LOST_ITEMS = 'Vật Thất Lạc (Tìm đồ)',
}

export interface UserInfo {
  name: string;
  birthYear: string;
  gender: string;
  question: string;
  category: DivinationCategory;
}

export interface DivinationResult {
  hexagramName: string; // Tên quẻ (ví dụ: Thuần Càn)
  poem: string[]; // Thơ phú (4 câu)
  interpretation: string; // Luận giải chi tiết
  advice: string; // Lời khuyên
  luckyElements: {
    direction: string;
    color: string;
    number: string;
  };
}
