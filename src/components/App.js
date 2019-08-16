import React from 'react';
// import Header from './Header';
// import Dog from './Dog';
// import Flower from './Flower';
// import Cat from './Cat';
// import SayHello from './SayHello';
// import Color from './Color';
// // import ColorButton from './ColorButton';
// import ColorPicker from './ColorPicker';
// import ColorDisplay from './ColorDisplay';
// import Incrementer from './Incrementer';
// import ColorsList from './ColorsList';
//needed for PhotoListExercise
// import PhotoAlbum from './PhotoExercise/PhotoAlbum';
// import Footer from './PhotoExercise/Footer';
// import Header from './PhotoExercise/Header';
import WaterTracker from './DrinkingTracker/WaterTracker';


// import Color from './Color';

export default function App() {
  // code needed for ColorPicker, ColorDisplay, and Incredmenter -- make App a class
  // state = {
  //   color: ''
  // };

  // colorClickState = color => {
  //   this.setState({ color });
  // }
  // render() {
  //   const { color } = this.state;

  // code needed for ColorsList
  // const colors = [
  //   { name: 'lime', hex: '#bfff00', rgb: { red: 191, green: 255, blue: 0 } },
  //   { name: 'grapefruit', hex: '#df6c67', rgb: { red: 223, green: 108, blue: 103 } },
  //   { name: 'orange', hex: '#ffa500', rgb: { red: 255, green: 165, blue: 0 } }
  // ];

  // code needed for PhotoList
  // const raccoonOne = "https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/db3c2f6660904b6784d4a41dd3ec34f0.jpg";
  // const raccoonTwo = "http://3.bp.blogspot.com/-3uZ4dQotf2s/T6ztuHlI62I/AAAAAAAACBY/cUxXC7hs_b0/s1600/Funny+Raccoon+09.jpg";
  // const raccoonThree = "https://i.redd.it/w2quv67ktrz11.jpg";
  // const raccoonFour = "https://live.staticflickr.com/166/379736754_92b4113efc_b.jpg";
  // const photos = [raccoonOne, raccoonTwo, raccoonThree, raccoonFour];

  return (
  /* <Header title="Nolan" image="src/assets/nolie.jpg" />
       <SayHello />
       <Dog name="Nolan" age="14" weight="45lbs" />
       <Header title="Flowers" image="src/assets/platycodon.jpg" />
       <Flower name="Platycodon" color="purple" meaning="unchanging love, honesty and obedience." />
       <Header title="Cats" image="src/assets/bombay.jpg" />
       <Cat name="Omi" breed="Bombay" color="black short hair" />
       <Color hex="#3B444B" rgb={{ red: 58, green: 68, blue: 75 }} name="arsenic gray" />
       <Header title="Color Button" /> */
       
  /* <ColorPicker colorClick={this.colorClickState}/>
      <ColorDisplay color={color}/>
      <Incrementer /> */

    // <ColorsList colors={colors} />
    /* <Header />
      <PhotoAlbum title="Look! Trash Pandas!" photos={photos} />
      <Footer /> */
    <WaterTracker maxWater={240} />
  );
}


