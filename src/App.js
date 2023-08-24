import PosteList from './features/posts/PosteList';
import './App.css';
import AddPostForm from './features/posts/AddPostForm';

function App() {
   return (
      <div className='app'>
         <AddPostForm />
         <PosteList />
      </div>
   );
}

export default App;
