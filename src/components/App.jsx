import Section from './Section/Section';
import PostList from './PostList/PostList';
import post from 'database/post';

export const App = () => {
  return (
    <div>
      <Section>
        <h2 className="header-title">Котик на диете - несчастный котик</h2>
      </Section>

      <PostList postList={post}/>

      {/* style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }} */}
      
    </div>
  );
};
