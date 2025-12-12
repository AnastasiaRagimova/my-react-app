import Tabs from "./Tabs.jsx";
import TabPanel from "./TabPanel.jsx";
import "./index.css";

export default function App() {
  return (
    <div className="app">

      <Tabs>
        <TabPanel title="Home">
          <h2 className="title">Welcome Home</h2>
          <p>This is the home tab content. Notice how we're using React children to pass content to the TabPanel component.</p>

          <ul>
            <li>React children allow flexible component composition</li>
            <li>Children can be any valid React element</li>
            <li>This makes components reusable and composable</li>
            <li>The <span className="highlight">props.children</span> prop contains everything between component tags</li>
          </ul>

          <div className="concept-box">
            <strong>Key Concept:</strong> The TabPanel component receives its content as children and displays it when the tab is active.
          </div>
        </TabPanel>

        <TabPanel title="About">
          <h2 className="title">About Us</h2>
          <p>This tab demonstrates how children can contain complex JSX structures. The TabPanel component receives these children and displays them when the tab is active.</p>

          <div className="concept-box">
            <h3>React Children Concepts:</h3>
            <ul>
              <li><span className="highlight">props.children</span> – Contains content written between component tags</li>
              <li><span className="highlight">Context API</span> – Used here to share state between Tab components</li>
              <li><span className="highlight">Composition</span> – Building complex UIs from reusable components</li>
            </ul>
          </div>
        </TabPanel>

        {/* SERVICES — screenshot 3 */}
        <TabPanel title="Services">
          <h2 className="title">Our Services</h2>
          <p>Here are the services we offer:</p>

          <div className="services-row">
            <div className="service-card">
              <h3>Service 1</h3>
              <p>Description of service one. This demonstrates how children can contain complex structures.</p>
            </div>

            <div className="service-card">
              <h3>Service 2</h3>
              <p>Description of service two. Each TabPanel can have different content structures.</p>
            </div>

            <div className="service-card">
              <h3>Service 3</h3>
              <p>Description of service three. The children prop makes this all possible!</p>
            </div>
          </div>
        </TabPanel>

        <TabPanel title="Contact">
          <h2 className="title">Contact Us</h2>
          <p>You can reach us using the details below:</p>

          <div className="concept-box">
            <ul>
              <li>Email: support@example.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 1234 React Lane, JavaScript City</li>
            </ul>
          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
}
