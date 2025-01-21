import { useState } from 'react'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import { CORE_CONCEPTS } from './data.js';
import TapButton from './components/TapButton.jsx';
import { EXAMPLES } from './data.js'
function App() {
  let [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selected) {
    setSelectedTopic(selected);
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />))}


          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}>Components</TapButton>
            <TapButton isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}>JSX</TapButton>
            <TapButton isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}>Props</TapButton>
            <TapButton isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}>State</TapButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
