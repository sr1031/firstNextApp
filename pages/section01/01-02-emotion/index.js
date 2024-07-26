import { MyInput, MySpan } from "../../../src/components/01-02-emotion/01-02-emotion-style";

export default function EmotionPage() {
    return (
        <div>
            <img src="/next.svg"></img>
            <MySpan>이메일:</MySpan>
            <MyInput type="text"></MyInput>
            <button>클릭하세요!</button>
        </div>
    );
}
