import classes from "./PageContent.module.css";

// eslint-disable-next-line react/prop-types
function PageContent({ title, children }) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
