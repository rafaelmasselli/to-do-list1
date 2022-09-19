
import "./style.scss"

interface Props {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <button className="btn" type="submit" {...rest} >
      {title}
    </button>
  );
}
