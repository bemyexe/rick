import styled from 'styled-components';
import { Pagination, ItemsGrid, useData, Header, AppState } from './components';
import { Button } from './components/common/Button';
import { Input } from './components/common/Input';
import { CustomSelect } from './components/common/Select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
  { value: '5', label: 'Five' }
];

export function App() {
  const { isFetching, isError } = useData();

  return (
    <Main>
      <Header />
      <Button color="#83BF46">Button</Button>
      <Button color="#FF5152">Button</Button>
      <Input />
      <CustomSelect options={options} />
      <AppState />

      {!isFetching && !isError && (
        <>
          <ItemsGrid />

          <Pagination />
        </>
      )}
    </Main>
  );
}

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0;
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 95%;
  }

  @media (max-width: 930px) {
    max-width: 85%;
  }

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;
