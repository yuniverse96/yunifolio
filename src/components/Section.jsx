function Section({ title, children }) {
    return (
      <>
        {title && <h2 className="title">{title}</h2>}
        <div className="section-content">{children}</div>
      </>
    );
  }
  
  export default Section;
  