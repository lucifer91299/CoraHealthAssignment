import React, {useCallback, useState} from 'react';

import {Text, View} from 'react-native';

const RefundPolicy = () => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };
  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  return (
    <View
      style={{
        marginTop: 10,
        display: 'flex',
        alignContent: 'flex-start',
        // backgroundColor: 'blue',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Refund Policy
      </Text>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 4}
        style={{lineHeight: 21}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        odio eros, porta ac suscipit et, feugiat in elit. Phasellus mattis urna
        nec sapien consequat, a lobortis massa faucibus. Suspendisse eget tortor
        egestas nunc ultricies faucibus. Fusce vitae dolor arcu. Suspendisse
        potenti. Vivamus nec tempus nisl, a auctor sapien. Aenean vehicula arcu
        laoreet facilisis ullamcorper. Aliquam et porta augue, sit amet pretium
        arcu. Nulla facilisi. Donec faucibus rutrum dui, vel finibus urna.
        Vivamus eu faucibus est. Duis hendrerit arcu in enim faucibus vehicula.
        Proin a arcu suscipit, porta elit et, efficitur mauris. Aliquam a purus
        eget augue varius accumsan. Pellentesque venenatis gravida leo eget
        interdum. Ut accumsan, nunc eget vestibulum porttitor, augue lorem
        facilisis ante, quis ullamcorper magna turpis vitae lorem. Morbi eu
        dictum enim. Cras interdum, augue finibus aliquet convallis, ipsum leo
        auctor quam, ut egestas quam mi sit amet ex. Duis convallis consequat
        gravida. Sed pretium, ex nec lobortis scelerisque, risus nulla porttitor
        nisi, at semper enim quam non risus. Etiam vehicula orci sit amet ex
        tincidunt mollis. Phasellus blandit ornare scelerisque. Aenean pretium,
        ex a vehicula posuere, augue ipsum ullamcorper ante, at efficitur dui
        odio congue felis. Curabitur quis scelerisque dolor. Aliquam gravida
        nulla sed leo bibendum auctor. Donec dapibus arcu eleifend tincidunt
        molestie. Proin aliquam purus ex, nec vehicula risus blandit at. Nam
        auctor pulvinar dolor in posuere. Integer mollis sem id enim egestas, at
        sodales nunc auctor. Cras molestie nisl non tortor lacinia egestas.
        Quisque feugiat risus est. Sed nunc est, convallis at mollis id,
        tincidunt eu risus. Phasellus fringilla dictum mi, ac placerat nunc
        consequat et. Integer at velit sit amet leo commodo porttitor sit amet
        eu lacus. Proin lectus arcu, scelerisque at dignissim in, euismod
        sagittis massa. Cras sodales cursus maximus. Nunc at sapien auctor,
        sodales lorem in, hendrerit quam. Praesent nec nisi feugiat, imperdiet
        elit eu, iaculis ipsum. Ut eu metus odio. Integer at metus ac nunc
        eleifend laoreet vitae eu ipsum. Sed sed lacus efficitur, venenatis
        nulla sed, interdum dui. Mauris lobortis urna tortor, consectetur
        finibus ligula rhoncus vel. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Duis tempus lacus at nibh
        lacinia, eget feugiat sapien consequat. Mauris eleifend arcu eget erat
        pulvinar venenatis. Quisque at risus vel nunc pharetra semper. Nam
        ullamcorper justo dapibus laoreet posuere. Donec tincidunt semper
        finibus. Sed laoreet felis non eros sagittis, nec faucibus justo
        molestie. Etiam et ligula maximus, pulvinar augue quis, vestibulum sem.
        Donec tincidunt nulla vitae dignissim ultrices. In quis molestie sem,
        dictum porttitor ligula. Nam dignissim tempor urna vitae imperdiet. Sed
        posuere risus ex. Etiam a ante at arcu congue pellentesque. Ut in
        finibus enim, eu pellentesque magna. Aliquam sit amet augue vehicula,
        rutrum lectus vitae, malesuada dolor. Ut pharetra eget lectus eu
        condimentum. Suspendisse euismod, nibh quis tristique consectetur, urna
        elit blandit erat, eget consectetur nunc est a risus. Phasellus turpis
        dui, iaculis sit amet nunc a, bibendum ullamcorper velit.
      </Text>

      {lengthMore ? (
        <Text
          onPress={toggleNumberOfLines}
          style={{lineHeight: 21, marginTop: 1}}>
          {textShown ? 'Read less...' : 'Read Details....'}
        </Text>
      ) : null}
    </View>
  );
};

export default RefundPolicy;
