import { askProblem } from "@/app/actions/qaActions";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export default function AskProblemPage() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <Link href="/qa" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Q&A
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Post a Problem</h1>
        <p className="text-slate-500 text-sm mt-1">Be as specific as possible to get the best solutions.</p>
      </div>

      <form action={askProblem} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-slate-900 mb-1.5">Problem Title</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            required 
            placeholder="E.g., How to center a div in Tailwind CSS?"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all font-medium text-slate-900"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-1.5">Detailed Description</label>
          <textarea 
            id="description" 
            name="description" 
            required 
            rows={8}
            placeholder="Explain the context, what you have tried, and the expected outcome..."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all text-sm resize-none text-slate-700"
          ></textarea>
        </div>

        <div className="pt-2 border-t border-slate-100 flex justify-end">
          <button 
            type="submit" 
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Send className="w-4 h-4" /> Post Problem
          </button>
        </div>
      </form>
    </div>
  );
}
