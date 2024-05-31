
'use client'
import React, {useEffect, useState} from 'react';
import RocketIcon from '@mui/icons-material/Rocket';
const AboutHtml = () => {
  const ScrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 500) {
      console.log('pesho if',window.scrollY)
      console.log('pesho if',show)
      setShow(true);
    } else {
      console.log('pesho else',window.scrollY)
      console.log('pesho else',show)
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  // const img1 = require.context('../../../assets/images', true);
  return (
    <div className="about">
      <div className='about-me'>
        <h2 className="text-align-center">За мен</h2>
      </div>
      <section>
        <p className='about-me-text'>Когато завърших средното си образование, започна нов етап в животами с авиационното
          инженерство, и след няколко години го завърших.В началото след завършването си бях много ентусиазиран. Но с
          времето разбрах,че само с желание и знание няма да се получи.
          За това Реших да дам шанс на хобито, което практикувах от пет години (като чисто любопитство) и да помагам на
          познати и роднини. Оттогава може да се каже, че работя.</p>
        <div>
          <q>Единственият начин да се подобрите е да
            приемете провалa.</q>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper tortor quis condimentum volutpat.
          Ut et nulla rhoncus, lacinia purus a, aliquet magna. Fusce id dui ac tortor fermentum rhoncus. Integer ac
          feugiat ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Aenean vitae arcu elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula
          aliquet ante eget accumsan. In hac habitasse platea dictumst. Pellentesque laoreet bibendum convallis. Nunc
          maximus augue erat, mollis iaculis mi tempus hendrerit. Cras a pulvinar velit.

          In et efficitur nulla. Pellentesque egestas nibh et aliquam porta. Curabitur pellentesque feugiat massa. Nunc
          eu mi at ex interdum tempus et sed diam. Quisque molestie sapien quis luctus placerat. Integer fermentum
          aliquam arcu ac finibus. Donec ut ligula pharetra nisl commodo lacinia. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Ut luctus quis justo ac rutrum. Phasellus volutpat posuere sollicitudin. Praesent
          venenatis est sit amet hendrerit mattis. Vivamus eu consectetur augue, sed pharetra nibh. Fusce non sodales
          magna. Quisque consequat sit amet felis quis ultricies.

          Nullam sit amet leo venenatis, consectetur dui eu, tristique turpis. Nulla egestas turpis at mi dictum
          posuere. Integer sit amet orci aliquet, cursus lacus sit amet, malesuada sem. Sed bibendum metus leo, vitae
          sagittis arcu pretium sed. Sed et leo sed arcu porta porta et vitae lacus. Cras euismod mauris in iaculis
          imperdiet. Duis placerat sagittis nibh non facilisis. Donec ultrices tincidunt augue quis pharetra.

          Nulla sed tellus id purus accumsan blandit. Phasellus porta vestibulum justo volutpat fringilla. Aenean
          blandit placerat nunc, nec varius enim molestie nec. Suspendisse fermentum elit id arcu mollis pulvinar. Donec
          eros elit, varius eu iaculis sed, cursus in lectus. Mauris et neque purus. Quisque consequat metus in
          consectetur rhoncus. Morbi et diam id tellus porta pulvinar. Sed id nisl ipsum. Etiam porttitor fermentum
          dolor, ut mattis lectus ullamcorper ac. Fusce at orci risus. Suspendisse eleifend lectus at tortor pulvinar
          gravida.

          Phasellus luctus orci eget lectus dignissim consectetur. Morbi molestie tincidunt tellus sed dapibus. Morbi
          eleifend suscipit risus, vitae iaculis felis viverra a. Morbi id erat leo. Nulla mattis, mi non vehicula
          vehicula, orci enim aliquam nisi, at sagittis arcu ipsum et leo. Sed auctor elementum ullamcorper. Cras ut
          sapien nibh. Nam sodales vulputate enim non placerat. In posuere ultrices placerat. Nam consectetur diam eget
          pretium ullamcorper.

          Curabitur tortor nulla, rutrum at lectus at, semper placerat massa. Proin hendrerit non libero vitae
          efficitur. Aenean tincidunt ligula a posuere ultrices. Etiam eget nulla vel sapien scelerisque volutpat. Cras
          varius turpis vel purus lacinia, non dictum arcu lacinia. Aliquam et sodales neque. Donec faucibus urna risus,
          nec bibendum mi iaculis vestibulum. Suspendisse potenti.

          Vestibulum lobortis justo lacus, sed laoreet purus consequat ut. Nulla commodo quam at odio fermentum auctor.
          Maecenas tortor quam, tincidunt ac metus nec, laoreet scelerisque nisi. Nulla posuere rhoncus quam, ut
          placerat urna vehicula nec. Mauris aliquet pharetra nisi eu placerat. In at dolor sed mauris mollis varius et
          vel ex. Quisque pulvinar purus ut odio facilisis, at mollis risus posuere. Duis malesuada felis ut condimentum
          rutrum. Nulla aliquet diam lectus. Donec semper lacus nec mauris vehicula, sit amet bibendum nisi venenatis.
          Fusce mattis arcu sed ex bibendum, non pretium urna pretium. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Maecenas mattis ante augue, ut venenatis ligula varius vitae. Donec in magna vitae lectus sodales
          vestibulum. Aenean nec maximus leo, vel gravida massa.

          Vivamus vehicula ornare lorem et aliquet. Donec mattis scelerisque mauris nec gravida. Donec sit amet quam
          quam. Vivamus euismod laoreet lacus, at bibendum tortor ultricies malesuada. In aliquam libero quis iaculis
          efficitur. Donec elementum libero vitae diam feugiat commodo. Nulla sodales accumsan ultricies. Morbi aliquam
          et risus vitae varius. Proin vitae orci est. Vivamus dictum nunc ac rhoncus gravida. In vitae dictum mauris,
          ac vulputate quam. In aliquet quis arcu sed tempor. Fusce efficitur metus in nulla vestibulum consequat.
          Curabitur non nunc porttitor sapien mollis ultricies. Suspendisse rutrum varius tellus, posuere rutrum ipsum
          bibendum nec. Duis tempor rhoncus elit, vitae malesuada enim rhoncus non.

          Vestibulum eget ante accumsan, sodales risus id, eleifend nunc. Etiam sollicitudin posuere auctor. Morbi
          scelerisque vestibulum diam, vel volutpat augue ornare at. Aliquam erat volutpat. Suspendisse porta viverra
          elit, at lacinia lectus lobortis ut. Sed lobortis, odio a dapibus vestibulum, lorem ipsum facilisis diam, sit
          amet vehicula dolor dolor sed elit. Cras massa mauris, dignissim a massa eget, porttitor ultrices tortor.
          Praesent semper posuere ex, et ultricies tellus tempor ac. Donec aliquet quis quam quis dapibus. Morbi arcu
          lectus, iaculis sed luctus sed, ullamcorper non nisl.

          Maecenas ex felis, efficitur at sodales non, facilisis ut risus. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Integer quis fringilla sapien, non malesuada leo. Aliquam erat
          volutpat. Curabitur maximus venenatis placerat. Nunc magna magna, tempus at imperdiet quis, condimentum at
          tortor. Nam mattis ante sed ante vulputate, faucibus placerat eros euismod. Mauris ut lacinia sapien, in
          lobortis arcu. Fusce gravida accumsan metus id facilisis. Nullam libero urna, ullamcorper a mi vel, aliquet
          elementum justo. Vivamus varius risus nec maximus molestie. Praesent nec neque nec nibh laoreet laoreet.
          Aliquam erat volutpat. Suspendisse potenti. Quisque posuere, nunc at tincidunt lacinia, risus lacus fermentum
          augue, sollicitudin ultricies enim tellus et nisi. Mauris elit purus, imperdiet vel elementum sit amet,
          vehicula at lectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper tortor quis condimentum volutpat.
          Ut et nulla rhoncus, lacinia purus a, aliquet magna. Fusce id dui ac tortor fermentum rhoncus. Integer ac
          feugiat ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Aenean vitae arcu elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula
          aliquet ante eget accumsan. In hac habitasse platea dictumst. Pellentesque laoreet bibendum convallis. Nunc
          maximus augue erat, mollis iaculis mi tempus hendrerit. Cras a pulvinar velit.

          In et efficitur nulla. Pellentesque egestas nibh et aliquam porta. Curabitur pellentesque feugiat massa. Nunc
          eu mi at ex interdum tempus et sed diam. Quisque molestie sapien quis luctus placerat. Integer fermentum
          aliquam arcu ac finibus. Donec ut ligula pharetra nisl commodo lacinia. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Ut luctus quis justo ac rutrum. Phasellus volutpat posuere sollicitudin. Praesent
          venenatis est sit amet hendrerit mattis. Vivamus eu consectetur augue, sed pharetra nibh. Fusce non sodales
          magna. Quisque consequat sit amet felis quis ultricies.

          Nullam sit amet leo venenatis, consectetur dui eu, tristique turpis. Nulla egestas turpis at mi dictum
          posuere. Integer sit amet orci aliquet, cursus lacus sit amet, malesuada sem. Sed bibendum metus leo, vitae
          sagittis arcu pretium sed. Sed et leo sed arcu porta porta et vitae lacus. Cras euismod mauris in iaculis
          imperdiet. Duis placerat sagittis nibh non facilisis. Donec ultrices tincidunt augue quis pharetra.

          Nulla sed tellus id purus accumsan blandit. Phasellus porta vestibulum justo volutpat fringilla. Aenean
          blandit placerat nunc, nec varius enim molestie nec. Suspendisse fermentum elit id arcu mollis pulvinar. Donec
          eros elit, varius eu iaculis sed, cursus in lectus. Mauris et neque purus. Quisque consequat metus in
          consectetur rhoncus. Morbi et diam id tellus porta pulvinar. Sed id nisl ipsum. Etiam porttitor fermentum
          dolor, ut mattis lectus ullamcorper ac. Fusce at orci risus. Suspendisse eleifend lectus at tortor pulvinar
          gravida.

          Phasellus luctus orci eget lectus dignissim consectetur. Morbi molestie tincidunt tellus sed dapibus. Morbi
          eleifend suscipit risus, vitae iaculis felis viverra a. Morbi id erat leo. Nulla mattis, mi non vehicula
          vehicula, orci enim aliquam nisi, at sagittis arcu ipsum et leo. Sed auctor elementum ullamcorper. Cras ut
          sapien nibh. Nam sodales vulputate enim non placerat. In posuere ultrices placerat. Nam consectetur diam eget
          pretium ullamcorper.

          Curabitur tortor nulla, rutrum at lectus at, semper placerat massa. Proin hendrerit non libero vitae
          efficitur. Aenean tincidunt ligula a posuere ultrices. Etiam eget nulla vel sapien scelerisque volutpat. Cras
          varius turpis vel purus lacinia, non dictum arcu lacinia. Aliquam et sodales neque. Donec faucibus urna risus,
          nec bibendum mi iaculis vestibulum. Suspendisse potenti.

          Vestibulum lobortis justo lacus, sed laoreet purus consequat ut. Nulla commodo quam at odio fermentum auctor.
          Maecenas tortor quam, tincidunt ac metus nec, laoreet scelerisque nisi. Nulla posuere rhoncus quam, ut
          placerat urna vehicula nec. Mauris aliquet pharetra nisi eu placerat. In at dolor sed mauris mollis varius et
          vel ex. Quisque pulvinar purus ut odio facilisis, at mollis risus posuere. Duis malesuada felis ut condimentum
          rutrum. Nulla aliquet diam lectus. Donec semper lacus nec mauris vehicula, sit amet bibendum nisi venenatis.
          Fusce mattis arcu sed ex bibendum, non pretium urna pretium. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Maecenas mattis ante augue, ut venenatis ligula varius vitae. Donec in magna vitae lectus sodales
          vestibulum. Aenean nec maximus leo, vel gravida massa.

          Vivamus vehicula ornare lorem et aliquet. Donec mattis scelerisque mauris nec gravida. Donec sit amet quam
          quam. Vivamus euismod laoreet lacus, at bibendum tortor ultricies malesuada. In aliquam libero quis iaculis
          efficitur. Donec elementum libero vitae diam feugiat commodo. Nulla sodales accumsan ultricies. Morbi aliquam
          et risus vitae varius. Proin vitae orci est. Vivamus dictum nunc ac rhoncus gravida. In vitae dictum mauris,
          ac vulputate quam. In aliquet quis arcu sed tempor. Fusce efficitur metus in nulla vestibulum consequat.
          Curabitur non nunc porttitor sapien mollis ultricies. Suspendisse rutrum varius tellus, posuere rutrum ipsum
          bibendum nec. Duis tempor rhoncus elit, vitae malesuada enim rhoncus non.

          Vestibulum eget ante accumsan, sodales risus id, eleifend nunc. Etiam sollicitudin posuere auctor. Morbi
          scelerisque vestibulum diam, vel volutpat augue ornare at. Aliquam erat volutpat. Suspendisse porta viverra
          elit, at lacinia lectus lobortis ut. Sed lobortis, odio a dapibus vestibulum, lorem ipsum facilisis diam, sit
          amet vehicula dolor dolor sed elit. Cras massa mauris, dignissim a massa eget, porttitor ultrices tortor.
          Praesent semper posuere ex, et ultricies tellus tempor ac. Donec aliquet quis quam quis dapibus. Morbi arcu
          lectus, iaculis sed luctus sed, ullamcorper non nisl.

          Maecenas ex felis, efficitur at sodales non, facilisis ut risus. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Integer quis fringilla sapien, non malesuada leo. Aliquam erat
          volutpat. Curabitur maximus venenatis placerat. Nunc magna magna, tempus at imperdiet quis, condimentum at
          tortor. Nam mattis ante sed ante vulputate, faucibus placerat eros euismod. Mauris ut lacinia sapien, in
          lobortis arcu. Fusce gravida accumsan metus id facilisis. Nullam libero urna, ullamcorper a mi vel, aliquet
          elementum justo. Vivamus varius risus nec maximus molestie. Praesent nec neque nec nibh laoreet laoreet.
          Aliquam erat volutpat. Suspendisse potenti. Quisque posuere, nunc at tincidunt lacinia, risus lacus fermentum
          augue, sollicitudin ultricies enim tellus et nisi. Mauris elit purus, imperdiet vel elementum sit amet,
          vehicula at lectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper tortor quis condimentum volutpat.
          Ut et nulla rhoncus, lacinia purus a, aliquet magna. Fusce id dui ac tortor fermentum rhoncus. Integer ac
          feugiat ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Aenean vitae arcu elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula
          aliquet ante eget accumsan. In hac habitasse platea dictumst. Pellentesque laoreet bibendum convallis. Nunc
          maximus augue erat, mollis iaculis mi tempus hendrerit. Cras a pulvinar velit.

          In et efficitur nulla. Pellentesque egestas nibh et aliquam porta. Curabitur pellentesque feugiat massa. Nunc
          eu mi at ex interdum tempus et sed diam. Quisque molestie sapien quis luctus placerat. Integer fermentum
          aliquam arcu ac finibus. Donec ut ligula pharetra nisl commodo lacinia. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Ut luctus quis justo ac rutrum. Phasellus volutpat posuere sollicitudin. Praesent
          venenatis est sit amet hendrerit mattis. Vivamus eu consectetur augue, sed pharetra nibh. Fusce non sodales
          magna. Quisque consequat sit amet felis quis ultricies.

          Nullam sit amet leo venenatis, consectetur dui eu, tristique turpis. Nulla egestas turpis at mi dictum
          posuere. Integer sit amet orci aliquet, cursus lacus sit amet, malesuada sem. Sed bibendum metus leo, vitae
          sagittis arcu pretium sed. Sed et leo sed arcu porta porta et vitae lacus. Cras euismod mauris in iaculis
          imperdiet. Duis placerat sagittis nibh non facilisis. Donec ultrices tincidunt augue quis pharetra.

          Nulla sed tellus id purus accumsan blandit. Phasellus porta vestibulum justo volutpat fringilla. Aenean
          blandit placerat nunc, nec varius enim molestie nec. Suspendisse fermentum elit id arcu mollis pulvinar. Donec
          eros elit, varius eu iaculis sed, cursus in lectus. Mauris et neque purus. Quisque consequat metus in
          consectetur rhoncus. Morbi et diam id tellus porta pulvinar. Sed id nisl ipsum. Etiam porttitor fermentum
          dolor, ut mattis lectus ullamcorper ac. Fusce at orci risus. Suspendisse eleifend lectus at tortor pulvinar
          gravida.

          Phasellus luctus orci eget lectus dignissim consectetur. Morbi molestie tincidunt tellus sed dapibus. Morbi
          eleifend suscipit risus, vitae iaculis felis viverra a. Morbi id erat leo. Nulla mattis, mi non vehicula
          vehicula, orci enim aliquam nisi, at sagittis arcu ipsum et leo. Sed auctor elementum ullamcorper. Cras ut
          sapien nibh. Nam sodales vulputate enim non placerat. In posuere ultrices placerat. Nam consectetur diam eget
          pretium ullamcorper.

          Curabitur tortor nulla, rutrum at lectus at, semper placerat massa. Proin hendrerit non libero vitae
          efficitur. Aenean tincidunt ligula a posuere ultrices. Etiam eget nulla vel sapien scelerisque volutpat. Cras
          varius turpis vel purus lacinia, non dictum arcu lacinia. Aliquam et sodales neque. Donec faucibus urna risus,
          nec bibendum mi iaculis vestibulum. Suspendisse potenti.

          Vestibulum lobortis justo lacus, sed laoreet purus consequat ut. Nulla commodo quam at odio fermentum auctor.
          Maecenas tortor quam, tincidunt ac metus nec, laoreet scelerisque nisi. Nulla posuere rhoncus quam, ut
          placerat urna vehicula nec. Mauris aliquet pharetra nisi eu placerat. In at dolor sed mauris mollis varius et
          vel ex. Quisque pulvinar purus ut odio facilisis, at mollis risus posuere. Duis malesuada felis ut condimentum
          rutrum. Nulla aliquet diam lectus. Donec semper lacus nec mauris vehicula, sit amet bibendum nisi venenatis.
          Fusce mattis arcu sed ex bibendum, non pretium urna pretium. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Maecenas mattis ante augue, ut venenatis ligula varius vitae. Donec in magna vitae lectus sodales
          vestibulum. Aenean nec maximus leo, vel gravida massa.

          Vivamus vehicula ornare lorem et aliquet. Donec mattis scelerisque mauris nec gravida. Donec sit amet quam
          quam. Vivamus euismod laoreet lacus, at bibendum tortor ultricies malesuada. In aliquam libero quis iaculis
          efficitur. Donec elementum libero vitae diam feugiat commodo. Nulla sodales accumsan ultricies. Morbi aliquam
          et risus vitae varius. Proin vitae orci est. Vivamus dictum nunc ac rhoncus gravida. In vitae dictum mauris,
          ac vulputate quam. In aliquet quis arcu sed tempor. Fusce efficitur metus in nulla vestibulum consequat.
          Curabitur non nunc porttitor sapien mollis ultricies. Suspendisse rutrum varius tellus, posuere rutrum ipsum
          bibendum nec. Duis tempor rhoncus elit, vitae malesuada enim rhoncus non.

          Vestibulum eget ante accumsan, sodales risus id, eleifend nunc. Etiam sollicitudin posuere auctor. Morbi
          scelerisque vestibulum diam, vel volutpat augue ornare at. Aliquam erat volutpat. Suspendisse porta viverra
          elit, at lacinia lectus lobortis ut. Sed lobortis, odio a dapibus vestibulum, lorem ipsum facilisis diam, sit
          amet vehicula dolor dolor sed elit. Cras massa mauris, dignissim a massa eget, porttitor ultrices tortor.
          Praesent semper posuere ex, et ultricies tellus tempor ac. Donec aliquet quis quam quis dapibus. Morbi arcu
          lectus, iaculis sed luctus sed, ullamcorper non nisl.

          Maecenas ex felis, efficitur at sodales non, facilisis ut risus. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Integer quis fringilla sapien, non malesuada leo. Aliquam erat
          volutpat. Curabitur maximus venenatis placerat. Nunc magna magna, tempus at imperdiet quis, condimentum at
          tortor. Nam mattis ante sed ante vulputate, faucibus placerat eros euismod. Mauris ut lacinia sapien, in
          lobortis arcu. Fusce gravida accumsan metus id facilisis. Nullam libero urna, ullamcorper a mi vel, aliquet
          elementum justo. Vivamus varius risus nec maximus molestie. Praesent nec neque nec nibh laoreet laoreet.
          Aliquam erat volutpat. Suspendisse potenti. Quisque posuere, nunc at tincidunt lacinia, risus lacus fermentum
          augue, sollicitudin ultricies enim tellus et nisi. Mauris elit purus, imperdiet vel elementum sit amet,
          vehicula at lectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper tortor quis condimentum volutpat.
          Ut et nulla rhoncus, lacinia purus a, aliquet magna. Fusce id dui ac tortor fermentum rhoncus. Integer ac
          feugiat ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Aenean vitae arcu elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula
          aliquet ante eget accumsan. In hac habitasse platea dictumst. Pellentesque laoreet bibendum convallis. Nunc
          maximus augue erat, mollis iaculis mi tempus hendrerit. Cras a pulvinar velit.

          In et efficitur nulla. Pellentesque egestas nibh et aliquam porta. Curabitur pellentesque feugiat massa. Nunc
          eu mi at ex interdum tempus et sed diam. Quisque molestie sapien quis luctus placerat. Integer fermentum
          aliquam arcu ac finibus. Donec ut ligula pharetra nisl commodo lacinia. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Ut luctus quis justo ac rutrum. Phasellus volutpat posuere sollicitudin. Praesent
          venenatis est sit amet hendrerit mattis. Vivamus eu consectetur augue, sed pharetra nibh. Fusce non sodales
          magna. Quisque consequat sit amet felis quis ultricies.

          Nullam sit amet leo venenatis, consectetur dui eu, tristique turpis. Nulla egestas turpis at mi dictum
          posuere. Integer sit amet orci aliquet, cursus lacus sit amet, malesuada sem. Sed bibendum metus leo, vitae
          sagittis arcu pretium sed. Sed et leo sed arcu porta porta et vitae lacus. Cras euismod mauris in iaculis
          imperdiet. Duis placerat sagittis nibh non facilisis. Donec ultrices tincidunt augue quis pharetra.

          Nulla sed tellus id purus accumsan blandit. Phasellus porta vestibulum justo volutpat fringilla. Aenean
          blandit placerat nunc, nec varius enim molestie nec. Suspendisse fermentum elit id arcu mollis pulvinar. Donec
          eros elit, varius eu iaculis sed, cursus in lectus. Mauris et neque purus. Quisque consequat metus in
          consectetur rhoncus. Morbi et diam id tellus porta pulvinar. Sed id nisl ipsum. Etiam porttitor fermentum
          dolor, ut mattis lectus ullamcorper ac. Fusce at orci risus. Suspendisse eleifend lectus at tortor pulvinar
          gravida.

          Phasellus luctus orci eget lectus dignissim consectetur. Morbi molestie tincidunt tellus sed dapibus. Morbi
          eleifend suscipit risus, vitae iaculis felis viverra a. Morbi id erat leo. Nulla mattis, mi non vehicula
          vehicula, orci enim aliquam nisi, at sagittis arcu ipsum et leo. Sed auctor elementum ullamcorper. Cras ut
          sapien nibh. Nam sodales vulputate enim non placerat. In posuere ultrices placerat. Nam consectetur diam eget
          pretium ullamcorper.

          Curabitur tortor nulla, rutrum at lectus at, semper placerat massa. Proin hendrerit non libero vitae
          efficitur. Aenean tincidunt ligula a posuere ultrices. Etiam eget nulla vel sapien scelerisque volutpat. Cras
          varius turpis vel purus lacinia, non dictum arcu lacinia. Aliquam et sodales neque. Donec faucibus urna risus,
          nec bibendum mi iaculis vestibulum. Suspendisse potenti.

          Vestibulum lobortis justo lacus, sed laoreet purus consequat ut. Nulla commodo quam at odio fermentum auctor.
          Maecenas tortor quam, tincidunt ac metus nec, laoreet scelerisque nisi. Nulla posuere rhoncus quam, ut
          placerat urna vehicula nec. Mauris aliquet pharetra nisi eu placerat. In at dolor sed mauris mollis varius et
          vel ex. Quisque pulvinar purus ut odio facilisis, at mollis risus posuere. Duis malesuada felis ut condimentum
          rutrum. Nulla aliquet diam lectus. Donec semper lacus nec mauris vehicula, sit amet bibendum nisi venenatis.
          Fusce mattis arcu sed ex bibendum, non pretium urna pretium. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Maecenas mattis ante augue, ut venenatis ligula varius vitae. Donec in magna vitae lectus sodales
          vestibulum. Aenean nec maximus leo, vel gravida massa.

          Vivamus vehicula ornare lorem et aliquet. Donec mattis scelerisque mauris nec gravida. Donec sit amet quam
          quam. Vivamus euismod laoreet lacus, at bibendum tortor ultricies malesuada. In aliquam libero quis iaculis
          efficitur. Donec elementum libero vitae diam feugiat commodo. Nulla sodales accumsan ultricies. Morbi aliquam
          et risus vitae varius. Proin vitae orci est. Vivamus dictum nunc ac rhoncus gravida. In vitae dictum mauris,
          ac vulputate quam. In aliquet quis arcu sed tempor. Fusce efficitur metus in nulla vestibulum consequat.
          Curabitur non nunc porttitor sapien mollis ultricies. Suspendisse rutrum varius tellus, posuere rutrum ipsum
          bibendum nec. Duis tempor rhoncus elit, vitae malesuada enim rhoncus non.

          Vestibulum eget ante accumsan, sodales risus id, eleifend nunc. Etiam sollicitudin posuere auctor. Morbi
          scelerisque vestibulum diam, vel volutpat augue ornare at. Aliquam erat volutpat. Suspendisse porta viverra
          elit, at lacinia lectus lobortis ut. Sed lobortis, odio a dapibus vestibulum, lorem ipsum facilisis diam, sit
          amet vehicula dolor dolor sed elit. Cras massa mauris, dignissim a massa eget, porttitor ultrices tortor.
          Praesent semper posuere ex, et ultricies tellus tempor ac. Donec aliquet quis quam quis dapibus. Morbi arcu
          lectus, iaculis sed luctus sed, ullamcorper non nisl.

          Maecenas ex felis, efficitur at sodales non, facilisis ut risus. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Integer quis fringilla sapien, non malesuada leo. Aliquam erat
          volutpat. Curabitur maximus venenatis placerat. Nunc magna magna, tempus at imperdiet quis, condimentum at
          tortor. Nam mattis ante sed ante vulputate, faucibus placerat eros euismod. Mauris ut lacinia sapien, in
          lobortis arcu. Fusce gravida accumsan metus id facilisis. Nullam libero urna, ullamcorper a mi vel, aliquet
          elementum justo. Vivamus varius risus nec maximus molestie. Praesent nec neque nec nibh laoreet laoreet.
          Aliquam erat volutpat. Suspendisse potenti. Quisque posuere, nunc at tincidunt lacinia, risus lacus fermentum
          augue, sollicitudin ultricies enim tellus et nisi. Mauris elit purus, imperdiet vel elementum sit amet,
          vehicula at lectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper tortor quis condimentum volutpat.
          Ut et nulla rhoncus, lacinia purus a, aliquet magna. Fusce id dui ac tortor fermentum rhoncus. Integer ac
          feugiat ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Aenean vitae arcu elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula
          aliquet ante eget accumsan. In hac habitasse platea dictumst. Pellentesque laoreet bibendum convallis. Nunc
          maximus augue erat, mollis iaculis mi tempus hendrerit. Cras a pulvinar velit.

          In et efficitur nulla. Pellentesque egestas nibh et aliquam porta. Curabitur pellentesque feugiat massa. Nunc
          eu mi at ex interdum tempus et sed diam. Quisque molestie sapien quis luctus placerat. Integer fermentum
          aliquam arcu ac finibus. Donec ut ligula pharetra nisl commodo lacinia. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Ut luctus quis justo ac rutrum. Phasellus volutpat posuere sollicitudin. Praesent
          venenatis est sit amet hendrerit mattis. Vivamus eu consectetur augue, sed pharetra nibh. Fusce non sodales
          magna. Quisque consequat sit amet felis quis ultricies.

          Nullam sit amet leo venenatis, consectetur dui eu, tristique turpis. Nulla egestas turpis at mi dictum
          posuere. Integer sit amet orci aliquet, cursus lacus sit amet, malesuada sem. Sed bibendum metus leo, vitae
          sagittis arcu pretium sed. Sed et leo sed arcu porta porta et vitae lacus. Cras euismod mauris in iaculis
          imperdiet. Duis placerat sagittis nibh non facilisis. Donec ultrices tincidunt augue quis pharetra.

          Nulla sed tellus id purus accumsan blandit. Phasellus porta vestibulum justo volutpat fringilla. Aenean
          blandit placerat nunc, nec varius enim molestie nec. Suspendisse fermentum elit id arcu mollis pulvinar. Donec
          eros elit, varius eu iaculis sed, cursus in lectus. Mauris et neque purus. Quisque consequat metus in
          consectetur rhoncus. Morbi et diam id tellus porta pulvinar. Sed id nisl ipsum. Etiam porttitor fermentum
          dolor, ut mattis lectus ullamcorper ac. Fusce at orci risus. Suspendisse eleifend lectus at tortor pulvinar
          gravida.

          Phasellus luctus orci eget lectus dignissim consectetur. Morbi molestie tincidunt tellus sed dapibus. Morbi
          eleifend suscipit risus, vitae iaculis felis viverra a. Morbi id erat leo. Nulla mattis, mi non vehicula
          vehicula, orci enim aliquam nisi, at sagittis arcu ipsum et leo. Sed auctor elementum ullamcorper. Cras ut
          sapien nibh. Nam sodales vulputate enim non placerat. In posuere ultrices placerat. Nam consectetur diam eget
          pretium ullamcorper.

          Curabitur tortor nulla, rutrum at lectus at, semper placerat massa. Proin hendrerit non libero vitae
          efficitur. Aenean tincidunt ligula a posuere ultrices. Etiam eget nulla vel sapien scelerisque volutpat. Cras
          varius turpis vel purus lacinia, non dictum arcu lacinia. Aliquam et sodales neque. Donec faucibus urna risus,
          nec bibendum mi iaculis vestibulum. Suspendisse potenti.

          Vestibulum lobortis justo lacus, sed laoreet purus consequat ut. Nulla commodo quam at odio fermentum auctor.
          Maecenas tortor quam, tincidunt ac metus nec, laoreet scelerisque nisi. Nulla posuere rhoncus quam, ut
          placerat urna vehicula nec. Mauris aliquet pharetra nisi eu placerat. In at dolor sed mauris mollis varius et
          vel ex. Quisque pulvinar purus ut odio facilisis, at mollis risus posuere. Duis malesuada felis ut condimentum
          rutrum. Nulla aliquet diam lectus. Donec semper lacus nec mauris vehicula, sit amet bibendum nisi venenatis.
          Fusce mattis arcu sed ex bibendum, non pretium urna pretium. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Maecenas mattis ante augue, ut venenatis ligula varius vitae. Donec in magna vitae lectus sodales
          vestibulum. Aenean nec maximus leo, vel gravida massa.

          Vivamus vehicula ornare lorem et aliquet. Donec mattis scelerisque mauris nec gravida. Donec sit amet quam
          quam. Vivamus euismod laoreet lacus, at bibendum tortor ultricies malesuada. In aliquam libero quis iaculis
          efficitur. Donec elementum libero vitae diam feugiat commodo. Nulla sodales accumsan ultricies. Morbi aliquam
          et risus vitae varius. Proin vitae orci est. Vivamus dictum nunc ac rhoncus gravida. In vitae dictum mauris,
          ac vulputate quam. In aliquet quis arcu sed tempor. Fusce efficitur metus in nulla vestibulum consequat.
          Curabitur non nunc porttitor sapien mollis ultricies. Suspendisse rutrum varius tellus, posuere rutrum ipsum
          bibendum nec. Duis tempor rhoncus elit, vitae malesuada enim rhoncus non.

          Vestibulum eget ante accumsan, sodales risus id, eleifend nunc. Etiam sollicitudin posuere auctor. Morbi
          scelerisque vestibulum diam, vel volutpat augue ornare at. Aliquam erat volutpat. Suspendisse porta viverra
          elit, at lacinia lectus lobortis ut. Sed lobortis, odio a dapibus vestibulum, lorem ipsum facilisis diam, sit
          amet vehicula dolor dolor sed elit. Cras massa mauris, dignissim a massa eget, porttitor ultrices tortor.
          Praesent semper posuere ex, et ultricies tellus tempor ac. Donec aliquet quis quam quis dapibus. Morbi arcu
          lectus, iaculis sed luctus sed, ullamcorper non nisl.

          Maecenas ex felis, efficitur at sodales non, facilisis ut risus. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Integer quis fringilla sapien, non malesuada leo. Aliquam erat
          volutpat. Curabitur maximus venenatis placerat. Nunc magna magna, tempus at imperdiet quis, condimentum at
          tortor. Nam mattis ante sed ante vulputate, faucibus placerat eros euismod. Mauris ut lacinia sapien, in
          lobortis arcu. Fusce gravida accumsan metus id facilisis. Nullam libero urna, ullamcorper a mi vel, aliquet
          elementum justo. Vivamus varius risus nec maximus molestie. Praesent nec neque nec nibh laoreet laoreet.
          Aliquam erat volutpat. Suspendisse potenti. Quisque posuere, nunc at tincidunt lacinia, risus lacus fermentum
          augue, sollicitudin ultricies enim tellus et nisi. Mauris elit purus, imperdiet vel elementum sit amet,
          vehicula at lectus.
        </p>  <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper tortor quis condimentum volutpat. Ut
        et nulla rhoncus, lacinia purus a, aliquet magna. Fusce id dui ac tortor fermentum rhoncus. Integer ac feugiat
        ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean
        vitae arcu elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula aliquet ante
        eget accumsan. In hac habitasse platea dictumst. Pellentesque laoreet bibendum convallis. Nunc maximus augue
        erat, mollis iaculis mi tempus hendrerit. Cras a pulvinar velit.

        In et efficitur nulla. Pellentesque egestas nibh et aliquam porta. Curabitur pellentesque feugiat massa. Nunc eu
        mi at ex interdum tempus et sed diam. Quisque molestie sapien quis luctus placerat. Integer fermentum aliquam
        arcu ac finibus. Donec ut ligula pharetra nisl commodo lacinia. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Ut luctus quis justo ac rutrum. Phasellus volutpat posuere sollicitudin. Praesent venenatis est sit
        amet hendrerit mattis. Vivamus eu consectetur augue, sed pharetra nibh. Fusce non sodales magna. Quisque
        consequat sit amet felis quis ultricies.

        Nullam sit amet leo venenatis, consectetur dui eu, tristique turpis. Nulla egestas turpis at mi dictum posuere.
        Integer sit amet orci aliquet, cursus lacus sit amet, malesuada sem. Sed bibendum metus leo, vitae sagittis arcu
        pretium sed. Sed et leo sed arcu porta porta et vitae lacus. Cras euismod mauris in iaculis imperdiet. Duis
        placerat sagittis nibh non facilisis. Donec ultrices tincidunt augue quis pharetra.

        Nulla sed tellus id purus accumsan blandit. Phasellus porta vestibulum justo volutpat fringilla. Aenean blandit
        placerat nunc, nec varius enim molestie nec. Suspendisse fermentum elit id arcu mollis pulvinar. Donec eros
        elit, varius eu iaculis sed, cursus in lectus. Mauris et neque purus. Quisque consequat metus in consectetur
        rhoncus. Morbi et diam id tellus porta pulvinar. Sed id nisl ipsum. Etiam porttitor fermentum dolor, ut mattis
        lectus ullamcorper ac. Fusce at orci risus. Suspendisse eleifend lectus at tortor pulvinar gravida.

        Phasellus luctus orci eget lectus dignissim consectetur. Morbi molestie tincidunt tellus sed dapibus. Morbi
        eleifend suscipit risus, vitae iaculis felis viverra a. Morbi id erat leo. Nulla mattis, mi non vehicula
        vehicula, orci enim aliquam nisi, at sagittis arcu ipsum et leo. Sed auctor elementum ullamcorper. Cras ut
        sapien nibh. Nam sodales vulputate enim non placerat. In posuere ultrices placerat. Nam consectetur diam eget
        pretium ullamcorper.

        Curabitur tortor nulla, rutrum at lectus at, semper placerat massa. Proin hendrerit non libero vitae efficitur.
        Aenean tincidunt ligula a posuere ultrices. Etiam eget nulla vel sapien scelerisque volutpat. Cras varius turpis
        vel purus lacinia, non dictum arcu lacinia. Aliquam et sodales neque. Donec faucibus urna risus, nec bibendum mi
        iaculis vestibulum. Suspendisse potenti.

        Vestibulum lobortis justo lacus, sed laoreet purus consequat ut. Nulla commodo quam at odio fermentum auctor.
        Maecenas tortor quam, tincidunt ac metus nec, laoreet scelerisque nisi. Nulla posuere rhoncus quam, ut placerat
        urna vehicula nec. Mauris aliquet pharetra nisi eu placerat. In at dolor sed mauris mollis varius et vel ex.
        Quisque pulvinar purus ut odio facilisis, at mollis risus posuere. Duis malesuada felis ut condimentum rutrum.
        Nulla aliquet diam lectus. Donec semper lacus nec mauris vehicula, sit amet bibendum nisi venenatis. Fusce
        mattis arcu sed ex bibendum, non pretium urna pretium. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Maecenas mattis ante augue, ut venenatis ligula varius vitae. Donec in magna vitae lectus sodales
        vestibulum. Aenean nec maximus leo, vel gravida massa.

        Vivamus vehicula ornare lorem et aliquet. Donec mattis scelerisque mauris nec gravida. Donec sit amet quam quam.
        Vivamus euismod laoreet lacus, at bibendum tortor ultricies malesuada. In aliquam libero quis iaculis efficitur.
        Donec elementum libero vitae diam feugiat commodo. Nulla sodales accumsan ultricies. Morbi aliquam et risus
        vitae varius. Proin vitae orci est. Vivamus dictum nunc ac rhoncus gravida. In vitae dictum mauris, ac vulputate
        quam. In aliquet quis arcu sed tempor. Fusce efficitur metus in nulla vestibulum consequat. Curabitur non nunc
        porttitor sapien mollis ultricies. Suspendisse rutrum varius tellus, posuere rutrum ipsum bibendum nec. Duis
        tempor rhoncus elit, vitae malesuada enim rhoncus non.

        Vestibulum eget ante accumsan, sodales risus id, eleifend nunc. Etiam sollicitudin posuere auctor. Morbi
        scelerisque vestibulum diam, vel volutpat augue ornare at. Aliquam erat volutpat. Suspendisse porta viverra
        elit, at lacinia lectus lobortis ut. Sed lobortis, odio a dapibus vestibulum, lorem ipsum facilisis diam, sit
        amet vehicula dolor dolor sed elit. Cras massa mauris, dignissim a massa eget, porttitor ultrices tortor.
        Praesent semper posuere ex, et ultricies tellus tempor ac. Donec aliquet quis quam quis dapibus. Morbi arcu
        lectus, iaculis sed luctus sed, ullamcorper non nisl.

        Maecenas ex felis, efficitur at sodales non, facilisis ut risus. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Integer quis fringilla sapien, non malesuada leo. Aliquam erat
        volutpat. Curabitur maximus venenatis placerat. Nunc magna magna, tempus at imperdiet quis, condimentum at
        tortor. Nam mattis ante sed ante vulputate, faucibus placerat eros euismod. Mauris ut lacinia sapien, in
        lobortis arcu. Fusce gravida accumsan metus id facilisis. Nullam libero urna, ullamcorper a mi vel, aliquet
        elementum justo. Vivamus varius risus nec maximus molestie. Praesent nec neque nec nibh laoreet laoreet. Aliquam
        erat volutpat. Suspendisse potenti. Quisque posuere, nunc at tincidunt lacinia, risus lacus fermentum augue,
        sollicitudin ultricies enim tellus et nisi. Mauris elit purus, imperdiet vel elementum sit amet, vehicula at
        lectus.
      </p>

      </section>
      <section className="info-bout-me">
        <div className="box-1">
          <div className="overlay-box">
            <div className="desc flex-horizontal-container justify-content-center align-items-center text-align-center">
              <h3 className='margin-15'>Футбол</h3>
              <p>когато имам свободно време</p>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="overlay-box">
            <div className="desc flex-horizontal-container justify-content-center align-items-center text-align-center">
              <h3 className='margin-15'>Акваристът</h3>
              <p> С аквариумистика се занимавам от 14 години и по-сериозно се занимавам от 5 години. Запалих се по-нея
                защото има много неща който човек може сам да си направи.</p>
            </div>
          </div>
        </div>
        <div className="box-3">
          <div className="overlay-box">
            <div className="desc flex-horizontal-container justify-content-center align-items-center text-align-center">
              <h3 className='margin-15'>Програмиране!</h3>
              <h2 className='margin-5'>Всичко започна като хоби</h2>
              <p>С изучаването на новите технологий и сблъскването с много проблеми ми ставаше все по-интересно и
                по-любипитно. И започнах да се замислям да ли да не му дам шанс!</p>
            </div>
          </div>
        </div>
        <div className="box-4">
          <div className="overlay-box">
            <div className="desc flex-horizontal-container justify-content-center align-items-center text-align-center">
              <h3 className='margin-15'>Книги</h3>
              <p>Тук главен виновник е едно видео което ми показа какво са парите и как те трябва да работят за мен.
                Както е казал Робърт Кийосаки в неговата книга <strong className='motivation'>"те са войници които
                  трябва да се бият за мен докато аз спа и да печелят"</strong></p>
            </div>
          </div>
        </div>
      </section>
      <div className={`nav ${show && 'nav__blue'}`} onClick={ScrollToTop}>
        <RocketIcon/>
      </div>
    </div>
  );
};

export default AboutHtml;
