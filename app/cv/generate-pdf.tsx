// cv/generate-pdf.tsx
'use client'

import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer'

// ✅ 1. Style PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
  },
  section: { marginBottom: 16 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  subheading: { fontSize: 14, fontWeight: 600, marginBottom: 4 },
  text: { fontSize: 12, marginBottom: 4 },
  bold: { fontWeight: 'bold' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 12 },
})

// ✅ 2. Nội dung CV (gọn, đẹp, chia nhóm)
const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Avatar + Thông tin */}
      <View style={styles.section}>
        <Image src="/long/long.png" style={styles.avatar} />
        <Text style={styles.heading}>Quách Thành Long</Text>
        <Text>📧 stephensouth1307@gmail.com | 📱 0979 137 018</Text>
        <Text>📍 Hồ Chí Minh, Việt Nam</Text>
      </View>

      {/* Giới thiệu */}
      <View style={styles.section}>
        <Text style={styles.subheading}>👨‍💻 Giới thiệu</Text>
        <Text>
          Nhà phát triển đa lĩnh vực với nền tảng công nghệ, kinh tế, và phân tích kinh doanh. Luôn theo đuổi giải pháp hiệu quả, sáng tạo và thực tiễn.
        </Text>
      </View>

      {/* Kỹ năng */}
      <View style={styles.section}>
        <Text style={styles.subheading}>⚙️ Kỹ năng</Text>
        <Text><Text style={styles.bold}>Frontend:</Text> React, Next.js, TypeScript, Tailwind</Text>
        <Text><Text style={styles.bold}>Backend:</Text> Node.js, Rust, MongoDB, PostgreSQL</Text>
        <Text><Text style={styles.bold}>Tools:</Text> Git, Figma, Docker, Unity</Text>
      </View>

      {/* Học vấn */}
      <View style={styles.section}>
        <Text style={styles.subheading}>🎓 Học vấn</Text>
        <Text>2021–2024: Cử nhân Quản trị Nhân sự – UEH</Text>
        <Text>2024–2027: Kinh tế Đầu tư – UEH</Text>
        <Text>2024–2026: Phát triển Game – VTC Academy</Text>
      </View>

      {/* Kinh nghiệm */}
      <View style={styles.section}>
        <Text style={styles.subheading}>💼 Kinh nghiệm</Text>
        <Text>Trưởng phòng IT – Trung tâm MSC (2025–nay)</Text>
        <Text>Web Dev & Phân tích đầu tư – MSC (2024–nay)</Text>
        <Text>BA Thực tập – BAC (2023)</Text>
        <Text>Strategic Advisor – Galaxy English (2024)</Text>
      </View>

      {/* Thành tích */}
      <View style={styles.section}>
        <Text style={styles.subheading}>🏆 Thành tích</Text>
        <Text>🥇 Giải Nhất Học bổng Tài năng – VTC</Text>
        <Text>🥉 Top 3 Business Analyst – BAC Competition</Text>
        <Text>🏃‍♂️ Vô địch Marathon VSM 42km</Text>
        <Text>⏱️ Pacer các giải chạy lớn</Text>
      </View>
    </Page>
  </Document>
)

// ✅ 3. Component export + nút tải
export default function GeneratePDF() {
  return (
    <div className="text-center py-10">
      <PDFDownloadLink
        document={<CVDocument />}
        fileName="QuachThanhLong_CV.pdf"
        className="bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        {({ loading }) => (loading ? 'Đang tạo CV...' : '📄 Tải xuống CV PDF')}
      </PDFDownloadLink>
    </div>
  )
}
