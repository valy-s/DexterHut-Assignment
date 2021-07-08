import PageContainer from "../components/pageContainer/pageContainer.component";

const PageNotFound = ({ onClick }) => {
  return (
    <PageContainer onClick={onClick}>
      <img
        className="responsive__image"
        src="https://leonleung.ca/wp-content/uploads/UnderConstruction-1024x576.png"
        alt="page under construction"
      />
    </PageContainer>
  );
};

export default PageNotFound;
