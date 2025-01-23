import styled from "@emotion/styled";

interface InputItemProps {
  content: string;
  value?: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputItemStyle = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 45px;
  background-color: #e3e3e3;
  border: none;
`;

const InputItem = ({ content, value, onChange, type }: InputItemProps) => {
  return (
    <div>
      <InputItemStyle
        placeholder={content}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};
export default InputItem;
