---
image: /blog/react-ts.png
---

## Tại sao lại là React và TypeScript? Giới thiệu

Nếu ví việc xây dựng ứng dụng React bằng JavaScript như xây một ngôi nhà không cần bản vẽ, thì việc dùng TypeScript chính là trang bị cho mình một bộ bản vẽ chi tiết, vững chắc. Bạn sẽ biết chính xác từng "viên gạch" (dữ liệu) thuộc loại nào, đặt ở đâu, và kết nối với nhau ra sao.

Trong hướng dẫn này, chúng ta sẽ không chỉ học cách "set up" một dự án. Chúng ta sẽ đi sâu vào các mẫu (patterns) phổ biến, cách gõ (typing) cho Hooks, Props, Events, và thậm chí cả các thành phần Generic nâng cao. Mục tiêu là sau khi đọc xong, bạn có thể tự tin áp dụng TypeScript vào bất kỳ dự án React nào, từ nhỏ đến lớn.

---

## Bắt đầu: Khởi tạo dự án

Cách nhanh nhất và được khuyến nghị để bắt đầu là sử dụng Create React App với template TypeScript:

```bash
npx create-react-app my-app --template typescript
Lệnh này sẽ tạo ra một dự án React đã được cấu hình sẵn với TypeScript, bao gồm file tsconfig.json và các type definitions cần thiết cho React (@types/react).

1. Typing cho Component Props: Nền tảng vững chắc
Thay vì đoán mò props chứa gì, chúng ta sẽ định nghĩa rõ ràng.

Sử dụng type hoặc interface
Cả hai đều hoạt động tốt. interface có thể được mở rộng, trong khi type linh hoạt hơn với các union và intersection. Lời khuyên là hãy chọn một và thống nhất trong dự án.

tsx
Copy
Edit
// Sử dụng `type`
type GreetingProps = {
  name: string;
  messageCount?: number; // Prop không bắt buộc
};

const Greeting = ({ name, messageCount = 0 }: GreetingProps) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You have {messageCount} new messages.</p>
    </div>
  );
};
Children prop
React 18 đã thay đổi cách chúng ta type children. Cách tốt nhất là định nghĩa rõ ràng trong props của bạn:

tsx
Copy
Edit
import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
2. Làm chủ các Hooks với TypeScript
useState: Tự động suy luận và định nghĩa tường minh
TypeScript rất thông minh, thường có thể tự suy luận kiểu dữ liệu cho state:

tsx
Copy
Edit
const [count, setCount] = useState(0); // count: number
const [user, setUser] = useState({ name: "Long", age: 25 }); // user: {name: string, age: number}
Khi state ban đầu là null hoặc mảng rỗng, cần chỉ định kiểu rõ ràng:

tsx
Copy
Edit
type User = { id: string; name: string };

const [currentUser, setCurrentUser] = useState<User | null>(null);
const [products, setProducts] = useState<Product[]>([]);
useRef: Tham chiếu DOM
tsx
Copy
Edit
import { useRef, useEffect } from 'react';

const MyInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
};
3. Xử lý sự kiện (Events)
Quên e: any đi! React cung cấp sẵn các kiểu dữ liệu chi tiết cho mọi loại sự kiện:

tsx
Copy
Edit
import type { ChangeEvent, MouseEvent } from 'react';

const EventComponent = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Button clicked!");
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
Mẹo: Khi gõ on trong JSX, VS Code sẽ tự gợi ý kiểu sự kiện.

4. Nâng cao: Component Generic
Component List có thể render bất kỳ loại dữ liệu nào:

tsx
Copy
Edit
import { ReactNode } from 'react';

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

const List = <T,>({ items, renderItem }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

// Ví dụ sử dụng
const App = () => {
  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
  const products = [{ id: 'a', title: 'Laptop' }, { id: 'b', title: 'Mouse' }];

  return (
    <div>
      <h2>User List</h2>
      <List items={users} renderItem={(user) => <span>{user.name}</span>} />

      <h2>Product List</h2>
      <List items={products} renderItem={(product) => <strong>{product.title}</strong>} />
    </div>
  );
};
Kết luận: Xây dựng để tồn tại
TypeScript giúp giảm lỗi runtime, cải thiện trải nghiệm lập trình viên nhờ auto-complete và phân tích code tĩnh.

Việc bảo trì và tái cấu trúc code trở nên dễ dàng và an toàn hơn.

Khi đã quen, bạn sẽ không muốn quay lại với "miền Tây hoang dã" của JavaScript nữa.

Chúc bạn thành công!

