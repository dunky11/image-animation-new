import React, { PureComponent } from 'react';
import {
  DarkTheme,
  DefaultTheme,
  Appbar,
  Provider as PaperProvider
} from 'react-native-paper';
import ChooseImage from "./pages/ChooseImage";
import ChooseVideo from "./pages/ChooseVideo";

const videos = [
  {
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "title": "video-1"
  }, {
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "title": "video-2"
  }, {
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "title": "video-3"
  }
];

const themeDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    surface: "rgb(40, 40, 40)"
  },
  adaptive: true,
}

const themeLight = DefaultTheme;

class App extends PureComponent {
  state = {
    isDarkMode: true,
    page: "ChooseImage",
    video: null
  }

  toggleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  onImageSelect = () => {
    this.setState({ page: "ChooseVideo" });
  }

  onVideoSelect = video => {
    console.log(video);
  };

  getTitle = () => {
    const { page } = this.state;
    switch (page) {
      case "ChooseImage": {
        return "Provide an image";
      }
      case "ChooseVideo": {
        return "Choose a video";
      }
      default: {
        throw new Error("No case selected in switch-statement.");
      }
    }
  }

  renderPage = () => {
    const { page } = this.state;
    switch (page) {
      case "ChooseImage": {
        return <ChooseImage
          onImageSelect={this.onImageSelect}
        />
      }
      case "ChooseVideo": {
        return <ChooseVideo
          onVideoSelect={this.onVideoSelect}
          videos={videos}
        />
      }
      default: {
        throw new Error("No case selected in switch-statement.");
      }
    }
  }

  render() {
    const { isDarkMode } = this.state;
    return (
      <PaperProvider theme={isDarkMode ? themeDark : themeLight}>
        <Appbar.Header style={{ elevation: 4 }}>
          <Appbar.Content title={this.getTitle()} />
          <Appbar.Action icon={isDarkMode ? "white-balance-sunny" : "weather-night"} onPress={this.toggleDarkMode} />
        </Appbar.Header>
        <div style={{ "backgroundColor": isDarkMode ? "#121212" : null, minHeight: "calc(100vh - 56px)" }}>
          {this.renderPage()}
        </div>
      </PaperProvider>
    );
  }
}


export default App;