# Things I Have Learned Through This Assignment:
1. Web Components Fundamentals:

* Gained a deeper understanding of building reusable, encapsulated UI components using custom elements and shadow DOM.

* Learned the naming conventions for custom elements, ensuring compatibility and clarity in the code (e.g., using hyphenated names like `<custom-card>`).

2. Slot Mechanism:

* Practiced using the slot element to create flexible layouts that can display various types of content within a single component.
* Understood how to define multiple slots (e.g., header, content, footer) to allow developers to pass in different parts of a component.

3. Style Encapsulation with Shadow DOM:

* Improved my knowledge of using the shadow DOM to encapsulate component styles, ensuring they don't interfere with or get affected by global CSS.

* Explored how to use scoped styles within the shadow DOM and understood how this boosts modularity and prevents style leakage.

4. Custom Attributes and CSS Custom Properties:

* Learned how to implement attributes and CSS custom properties to allow customization of the component's appearance.

* This flexibility makes it easier to adjust properties like background color, border-radius, or shadow effects without altering the internal component logic.

5. JavaScript Class-Based Custom Elements:

* Strengthened skills in defining custom elements through JavaScript classes and handling component lifecycles.

* Enhanced my ability to implement logic that reacts to attribute changes using attributeChangedCallback() and set up default behaviors in connectedCallback().

6. Event Handling and Communication:

* Developed an understanding of creating and dispatching custom events to communicate component state changes to other parts of the application.
* For example, I created a "toggle-button" component that dispatched a `toggle-changed` event and maintained state using `localStorage`.

### Challenges Faced and How They Were Overcome:
1. Learning Shadow DOM Limitations:

* Challenge: Initially struggled with the limitations of the shadow DOM when it came to styling elements outside its scope or integrating with external frameworks.
* Solution: Focused on using CSS custom properties to allow limited customization from outside the shadow DOM while maintaining encapsulation.

2. Slot Implementation and Content Projection:

* Challenge: Ensuring that multiple slots worked seamlessly within the card component and displayed different content correctly.
* Solution: Carefully structured the component's HTML template and tested the slot allocation with various types of content (e.g., text, images) to confirm proper content projection.

3. Managing Component State:

* Challenge: Handling the persistent state of the "toggle-button" component, especially making sure the state was maintained across page reloads.
* Solution: Implemented localStorage to save the toggle state and used `connectedCallback()` to restore it when the page was reloaded. Also, carefully monitored event listeners to avoid redundant calls.

4. Building Event-Driven Architecture:

* Challenge: Creating custom events that were easy to listen for in other parts of the application and conveyed meaningful data.
  
* Solution: Used ` dispatchEvent()` with custom events that included a `detail` property to pass additional data. Ensured events were intuitive and had clear names for easy integration.

5. Balancing Flexibility with Encapsulation:

* Challenge: Designing the components to be customizable but still maintaining encapsulated behavior and styling.

* Solution: Used a combination of shadow DOM for core styling and CSS variables to expose customization options, achieving a good balance between flexibility and encapsulation.

<b>These challenges and lessons helped me build better, more reusable web components and improved my approach to structuring and designing custom UI elements with a focus on flexibility and encapsulation