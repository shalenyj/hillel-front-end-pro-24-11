import { createBrowserRouter} from "react-router-dom";
import AboutPage from './pages/About';
import MainPage from './pages/Main';
import PostsPage from './pages/Posts';
import PostPage from './pages/Post';
import PostPageWraper from "./pages/PostPageWrapper";
import PostComments from "./pages/PostComments";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/posts',
    element: <PostPageWraper />,
    children: [
      {
        path: '',
        element: <PostsPage />,
      },
      {
        path: ':id',
        element: <PostPage />
      },
      {
        path: ':id/comments',
        element: <PostComments />
      }
    ]
  },
  {
    path: '*',
    element: <div>Not found page</div>
  },
])

export default router