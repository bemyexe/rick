import { useState } from 'react';
import styled from 'styled-components';
import { Popup } from './popup';
import { useData } from './providers';
import { Card } from './card';

const DEFAULT_POPUP_SETTINGS = {
  visible: false,
  content: {}
};

export function ItemsGrid() {
  const { characters } = useData();
  const [popupSettings, setPopupSettings] = useState(DEFAULT_POPUP_SETTINGS);

  const cardOnClickHandler = (props) => {
    setPopupSettings({
      visible: true,
      content: { ...props }
    });
  };

  if (!characters.length) {
    return null;
  }

  return (
    <Container>
      {characters.map((props) => (
        <Card
          key={props.id}
          onClickHandler={() => cardOnClickHandler(props)}
          {...props}
        />
      ))}

      <Popup settings={popupSettings} setSettings={setPopupSettings} />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 30px;
`;
