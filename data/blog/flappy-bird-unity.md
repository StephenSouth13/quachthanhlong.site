---
title: "Flappy Bird Unity: Tạo game huyền thoại chỉ trong 1 giờ!"
title_en: "Flappy Bird Unity: Build the Legendary Game in 1 Hour!"
excerpt: "Hướng dẫn chi tiết cách làm game Flappy Bird bằng Unity, kèm hình ảnh và mẹo tối ưu cho mọi lập trình viên."
excerpt_en: "Step-by-step guide to making Flappy Bird in Unity, with images and pro tips for all developers."
author: Quach Thanh Long
date: 2025-08-17
image: /game/flappybird.png
tags:
  - Unity
  - Game Development
  - Flappy Bird
readTime: 8
featured: true
---

## Giới thiệu 

Bạn có từng mê mẩn Flappy Bird? Hôm nay, mình sẽ hướng dẫn bạn tạo lại game này bằng Unity, chỉ trong 1 giờ!



## Các bước thực hiện

### 1. Chuẩn bị Sprite và Assets

Tải hình ảnh chim, ống nước và nền 

### 2. Tạo Scene Unity

- Thêm background, bird, pipe vào scene.
- Đặt Rigidbody2D cho bird, Collider cho pipe.

### 3. Lập trình chuyển động

```csharp
// BirdController.cs
using UnityEngine;

public class BirdController : MonoBehaviour
{
    public float jumpForce = 5f;
    private Rigidbody2D rb;

    void Start() { rb = GetComponent<Rigidbody2D>(); }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
            rb.velocity = Vector2.up * jumpForce;
    }
}
```

### 4. Sinh ống nước tự động

```csharp
// PipeSpawner.cs
using UnityEngine;

public class PipeSpawner : MonoBehaviour
{
    public GameObject pipePrefab;
    public float spawnRate = 1.5f;

    void Start() { InvokeRepeating("SpawnPipe", 1f, spawnRate); }

    void SpawnPipe()
    {
        Instantiate(pipePrefab, new Vector3(3, Random.Range(-1f, 2f), 0), Quaternion.identity);
    }
}
```

### 5. Xử lý va chạm & điểm số

- Khi chim va vào ống nước hoặc rơi xuống đất, kết thúc game.
- Tăng điểm mỗi khi chim bay qua ống nước.

## Mẹo tối ưu

- Sử dụng Object Pooling cho pipe để tiết kiệm tài nguyên.
- Thêm hiệu ứng âm thanh và particle khi chim va chạm.

## Kết luận

Chỉ với vài bước đơn giản, bạn đã có thể tự tay làm ra Flappy Bird phiên bản Unity!  
Chúc bạn thành công và sáng tạo thêm nhiều tính năng mới!

---
