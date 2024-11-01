import Accordion from 'react-bootstrap/Accordion';

function AlwaysOpenExample() {
    return (
        <Accordion className='section' defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Ковры и их применение</Accordion.Header>
                <Accordion.Body>
                    Корректировка визуального восприятия пространства. В зависимости от формы, размера и орнамента ковёр может зрительно увеличить или уменьшить объём помещения, а также скорректировать конфигурацию комнаты.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Атмосфера ковров</Accordion.Header>
                <Accordion.Body>
                    Создание уютной атмосферы. Ковры дарят чувство уюта и тепла в доме. Можно ходить по комнате босиком, играть на полу с ребёнком или удобно устроиться перед телевизором, разложив на ковре декоративные подушки.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AlwaysOpenExample;