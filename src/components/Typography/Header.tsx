type IHeaderProps = {
  headerText: string;
};

const Header = ({ headerText }: IHeaderProps) => <h1>{headerText}</h1>;

export { Header };
