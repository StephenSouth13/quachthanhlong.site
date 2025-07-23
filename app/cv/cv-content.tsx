// app/cv-pdf/cv-content.tsx
import React from 'react'
import styles from './cv-pdf.module.css'

export default function CVContent() {
  return (
    <div className={styles.cvWrapper}>
      <section className={styles.section}>
        <h2 className={styles.title}>Thông tin cá nhân</h2>
        <p><strong>Họ tên:</strong> Quách Thành Long</p>
        <p><strong>Email:</strong> stephensouth1307@gmail.com</p>
        <p><strong>Điện thoại:</strong> 0979 137 018</p>
        <p><strong>Địa chỉ:</strong> TP. Hồ Chí Minh, Việt Nam</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Kỹ năng</h2>
        <ul>
          <li>HTML, CSS, JavaScript, TypeScript</li>
          <li>React, Next.js, TailwindCSS</li>
          <li>Rust, Go, Web3, Smart Contracts</li>
          <li>UI/UX Design, Responsive Design</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Kinh nghiệm</h2>
        <p><strong>2024 - Nay:</strong> Developer @ NebulaStore, xây dựng hệ thống bán hàng bằng Next.js + Go + Rust</p>
        <p><strong>2022 - 2023:</strong> UI Designer & Game Developer</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Học vấn</h2>
        <p><strong>VTC Academy</strong> – Lập trình Frontend nâng cao</p>
      </section>
    </div>
  )
}
