import PageContainer from "../components/pageContainer/pageContainer.component";
import ProfileCard from "../components/profileCard/profileCard.component";
import { posts } from "./posts";

const HomePage = ({ onClick }) => {
  return (
    <PageContainer onClick={onClick}>
      {posts.map((post) => (
        <ProfileCard
          key={post.id}
          id={post.id}
          user={post.user}
          hashTag={post.hasTag}
          tweet={post.tweet}
          time={post.time}
          noMessages={post.noMessages}
          noLikes={post.noLikes}
          noResent={post.noResent}
        />
      ))}
    </PageContainer>
  );
};

export default HomePage;
