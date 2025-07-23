// generate-pdf.tsx hoặc generate-pdf.ts
import html2pdf from "html2pdf.js"

export const downloadPDF = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (!element) return

  html2pdf()
    .set({ margin: 0.5, filename: "my-cv.pdf", image: { type: 'jpeg', quality: 0.98 } })
    .from(element)
    .save()
}
