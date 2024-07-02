import classNames from "classnames";

type Props = {
  isDesktop?: boolean;
};
const Links = (props: Props) => {
  const { isDesktop } = props;
  return (
    <ul
      className={classNames(
        {
          "col-start-8 col-end-12 flex justify-end gap-[40px] items-end":
            isDesktop,
        },
        {
          "mt-[93px] ml-[30px] flex flex-col gap-y-[24px]": !isDesktop,
        }
      )}
    >
      <li className="link">Home</li>
      <li className="link">New</li>
      <li className="link">Popular</li>
      <li className="link">Trending</li>
      <li className="link">Categories</li>
    </ul>
  );
};

export default Links;
