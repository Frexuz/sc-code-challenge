# Instructions

Assuming someone is a developer on Mac, it should be easy to get running. If not, I could deliver the app through Apple's TestFlight.
Here's also a video of the app: [https://drive.google.com/file/d/1ba9LgBGa9K8BSfBDsAOz0EGSPIzZhI0e/view?usp=sharing](https://drive.google.com/file/d/1ba9LgBGa9K8BSfBDsAOz0EGSPIzZhI0e/view?usp=sharing)

### Requirements

- XCode 9+
- Node 8+, with `npm` or `yarn`

### Installing

1. Clone repo
2. Run `yarn` or `npm install`

### Running

1. Run `react-native run-ios`. Build time takes around 2 minutes. The emulator should start and launch the app when the build finishes.

# Thoughts

Things that I've omitted, or that could be improved:

- No error handling, while fetching data from the API, apart from displaying an 'Empty state'.
- Code linting was not set up in this project.
- No code tests.
- (React specific) Missing PropTypes in most files. Used for type checking.
- No code comments. For React developers, most of the code should be self explanatory.
- Have not focused on performance. While React Native is fast out-of-the-box, there are things to improve.

Inconsistencies to demonstrate what I can do in different ways:

- Used a mix of styling techniquies; 'Inline styling', 'React Native Stylesheet', and 'Styled Components'.
- Some data goes through the data store (Redux), and some is just fetched and stored in local component state.
  Some types of data are not suitable to store in Redux, such as very big lists, data that can go stale very easily, or data that doesn't need sharing between screens or components.

Others:

- Keeping files small.
- Separating files as much as possible. Especially their concerns. For example; data containers vs. presentational components.
- The app hasn't been ran, tested, or optimized for Android.
- Chinese translations are just done via Google Translate and are probably very wrong :)
