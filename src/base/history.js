/**
 * https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4/42716055
 * 将history 对象放在组件外部 用于控制跳转
 */

// use hashHistory
import { createHashHistory } from 'history';
  // use browserHistory
  // import createHistory from 'history/createBrowserHistory';
  
  const history = createHashHistory();
  
export default history;
  