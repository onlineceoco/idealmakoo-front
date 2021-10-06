import DescriptionStyle from "./DescriptionComment.module.css";

const DescriptionComment = ({leftTabTitle, rightTabTitle}) => {
  return (
    <div className={DescriptionStyle["main"]}>
      <div className={DescriptionStyle["tabs"]}>
        <input type="radio" id="tab1" name="tab-control" defaultChecked />
        <input type="radio" id="tab2" name="tab-control" />
        <ul>
          <li title="Description">
            <label htmlFor="tab1" role="button">
              
              
              <span>{leftTabTitle}</span>
            </label>
          </li>
          <li title="Comment">
            <label htmlFor="tab2" role="button">
              
              <span>{rightTabTitle}</span>
            </label>
          </li>
        </ul>
        <div className={DescriptionStyle["slider"]}>
          <div className={DescriptionStyle["indicator"]} />
        </div>
        <div className={DescriptionStyle["content"]}>
          <section>
          <h1>hello</h1>
          </section>
          <section>
            <h1>hello</h1>
          </section>
        </div>
      </div>
      <style global jsx>
        {`
          @import "https://fonts.googleapis.com/css?family=Montserrat:400,700|Raleway:300,400";
          body {
            font-family: "Raleway";
          }
          body h1 {
            text-align: center;
            color: #428bff;
            font-weight: 300;
            padding: 0;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

export default DescriptionComment;
