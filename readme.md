# Readme

## Instrukser

Besvarelse af opgaverne ligger i de respektive mapper for dagene.

- OBS. Fredagsopgaven er ikke lavet.

Svarende på de stillede spørgsmål findes herunder.

<br />

## Spørgsmål

### Lists and keys

#### What is the purpose of the key value, which must be given to individual rows in a react-list

Keys er en string attribut, som hjælper React med at finde ud af, hvilke 'items', der er ændret, tilføjet eller fjernet.

#### It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?

Man kan benytte sig af indexet.

#### What is the difference(s) between state and props?

Props are variables passed on from a/its parent component. State on are variables initialized directly by the component itself.

#### For which scenarios would you use props, and for which would you use state?

State is observable, modifiable. They can be updated by event handlers ex. setState(). They're also only usable in class components.
Props are not modifiable and are passed down from a parent component, you would therefore use it in both class and function components.

#### Where is the only place you can set state directly as in: this.state = {name: "Peter"};

In class components.

#### How must you set state all other places?

You can through hooks.

const [x, setX] = useState()

<br />

### Forms

#### In a Controlled Component React state is made the "Single source of truth", so how:

##### Do we ensure that input controls like text, textarea or select always presents the value found in the components state?

In the input tag, you can set element like: value={}

##### Do we ensure that a controls state, always matches the value found in an input control?

Using the event handler onChange, you're making sure, that the value is equal to the element in the input field.

#### What is the purpose of doing event.preventDefault() in an event handler?

Usually it would be used to prevent the browser from refreshing the page.

#### What would be the effect of NOT doing event.preventDefault in a submit handler

The effect would be a reload of the page, and incidently a request to the server.

#### Why don't we want to submit the traditional way, in a single page application?

It wouldnt be a single page app if we would make requests with each action, like submit.

#### Explain in words what it takes to implement the "Controlled Component" pattern for a form

We need useState i.e. a person. and eventhandlers to handle the state, like changing the name of the person using setPerson.

<br />

### Lifting State

#### What is meant by the react term “Lifting State Up”?

This is connected to state and props. Explained earlier, props are passed on from a parent component, it's therefore not modifiable because of how data flows/ is handled in react. Usually data flows downward, i.e. from a parent component to a child component. But liftingstate makes it possible through passing a callback method from a parent to child, which can modify the parent state.

#### Where do you lift it up to?

From wherever the callback is sent from. It can be passed on from child to child, too. Meaning it can go through multiple 'layers'.

#### Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?

From top to bottom.
