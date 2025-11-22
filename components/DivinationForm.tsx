import React, { useState } from 'react';
import { UserInfo, DivinationCategory } from '../types';

interface DivinationFormProps {
  onSubmit: (info: UserInfo) => void;
}

const DivinationForm: React.FC<DivinationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserInfo>({
    name: '',
    birthYear: '',
    gender: 'Nam',
    question: '',
    category: DivinationCategory.GENERAL,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.question) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-6 relative z-10">
      
      <div className="bg-white/40 backdrop-blur-sm border-2 border-oriental-red/30 p-8 rounded-lg shadow-xl relative overflow-hidden">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-oriental-red"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-oriental-red"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-oriental-red"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-oriental-red"></div>

        <h2 className="text-3xl font-display text-center text-oriental-red mb-8 font-bold uppercase tracking-widest">
          Nhập Thông Tin
        </h2>

        <div className="space-y-4 font-serif">
          <div>
            <label className="block text-ink-black font-bold mb-1">Họ và Tên</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-paper-bg border-b-2 border-stone-400 focus:border-oriental-red outline-none px-2 py-2 transition-colors placeholder-stone-500/50 text-lg"
              placeholder="Ví dụ: Nguyễn Văn A"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-ink-black font-bold mb-1">Năm Sinh (Âm/Dương)</label>
              <input
                type="text"
                name="birthYear"
                required
                value={formData.birthYear}
                onChange={handleChange}
                className="w-full bg-paper-bg border-b-2 border-stone-400 focus:border-oriental-red outline-none px-2 py-2 transition-colors placeholder-stone-500/50 text-lg"
                placeholder="VD: 1990"
              />
            </div>
            <div>
              <label className="block text-ink-black font-bold mb-1">Giới Tính</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full bg-paper-bg border-b-2 border-stone-400 focus:border-oriental-red outline-none px-2 py-2.5 text-lg"
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-ink-black font-bold mb-1">Lĩnh Vực Muốn Xem</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-paper-bg border-b-2 border-stone-400 focus:border-oriental-red outline-none px-2 py-2.5 text-lg"
            >
              {Object.values(DivinationCategory).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-ink-black font-bold mb-1">Sở Cầu (Câu hỏi cụ thể)</label>
            <textarea
              name="question"
              required
              rows={3}
              value={formData.question}
              onChange={handleChange}
              className="w-full bg-paper-bg border-2 border-stone-300 focus:border-oriental-red outline-none px-3 py-2 rounded resize-none text-lg"
              placeholder="Hãy thành tâm nhập câu hỏi..."
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="group relative inline-flex items-center justify-center px-10 py-3 text-lg font-bold text-white transition-all duration-200 bg-oriental-red font-display tracking-widest hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900 rounded-sm shadow-lg transform hover:-translate-y-1"
          >
            <span className="absolute inset-0 border border-white opacity-20 group-hover:scale-105 transition-transform"></span>
            Gieo Quẻ
          </button>
        </div>
      </div>
    </form>
  );
};

export default DivinationForm;
