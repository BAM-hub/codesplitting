import loadable from '@loadable/component';
import Header from 'home/Header';

const DefComponent = loadable(() => import('./MyComponent'));
const NameComponent1 = loadable(() => import('./MyComponent'), {
  resolveComponent: components => components.NameComponent1
});
const NameComponent = loadable(() => import('./MyComponent'), {
  resolveComponent: (components, props) =>
    components[`NameComponent${props.index}`],
});

const App = () => {
  return (
    <div>
      <Header />
      <div>Product App</div>
      <DefComponent />
      <NameComponent1 />
      <NameComponent index={2} />
    </div>
  );
}

export default App;
