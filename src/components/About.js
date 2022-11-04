import { NavLink } from "react-router-dom";



const About = () => {
    return (
      /*this code will provide the error that shows the 404 page once you click HOME link on About page*/
        <div className="about">
          <div className="home-list">
            <ul className="fix-list">
                <li><NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: 'white'}}
                     to="/home">Home</NavLink>
                </li>
                <li>
                     <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: 'white'}}
                     to="/users">Users</NavLink>
                </li>
                <li>
                      <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: 'white'}}
                      to="/about">About</NavLink>
                </li>
            </ul>
        </div>
        <div className="text-lorem">
          <h1 className="about-text">About Page</h1>
         <p className="about-para">Lorem Ipsum
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit tempus lectus a consectetur. Integer gravida dui et tellus aliquam ultrices. Curabitur cursus eget dui nec malesuada. Pellentesque eget fringilla leo. Integer orci sem, interdum sit amet mauris vel, tempor rutrum arcu. Pellentesque massa ante, fermentum non rutrum id, sollicitudin vitae sapien. Vestibulum eget arcu a ipsum porttitor tempor vel non elit.

In in iaculis purus, suscipit venenatis velit. Nullam venenatis leo ut ipsum placerat, in blandit elit scelerisque. Vestibulum ultricies sapien sapien, vitae mattis dui facilisis suscipit. Pellentesque ex nunc, aliquet nec condimentum at, pretium ut lectus. Nullam mauris sapien, viverra eget velit a, dictum dignissim quam. Praesent eleifend suscipit tortor, eu scelerisque dui ultrices et. Pellentesque vel nisl eros. Praesent tincidunt dapibus eros et elementum. Nulla pulvinar tortor diam, et posuere lectus gravida at. Donec porta purus vel semper ultrices. Vivamus vulputate et lacus et hendrerit. Aenean eros mauris, ornare sed iaculis et, iaculis non nisl. Duis est neque, mollis in erat nec, sagittis laoreet lectus. Nunc mollis erat sit amet dolor cursus sodales. Suspendisse ligula dui, condimentum eget laoreet sit amet, pulvinar quis justo.

Maecenas diam purus, scelerisque non purus quis, dignissim consequat est. Sed ultrices sollicitudin erat at egestas. Aliquam erat volutpat. Donec sed quam eu turpis fringilla fermentum eget in turpis. Phasellus in viverra diam. Integer sagittis, est nec efficitur posuere, arcu justo scelerisque augue, eu congue diam tortor nec mauris. Maecenas facilisis vestibulum tellus, vitae facilisis arcu blandit a. Nullam ut purus auctor, semper massa et, commodo risus. Proin nec mi sed massa sollicitudin dignissim. Cras nec elementum ligula. Integer varius purus non sem commodo, ut molestie leo ultrices. Sed at risus enim.

Integer euismod a diam sit amet rhoncus. Nam semper odio at mauris porta, at ultricies felis accumsan. Etiam sollicitudin, magna et dictum vulputate, elit odio mattis diam, at gravida sapien sem id nisl. Mauris non enim placerat velit pulvinar consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi imperdiet eleifend nibh at auctor. Nunc vel congue diam. Morbi eu malesuada nunc, at vulputate nisi. Nam sem tortor, elementum id justo eget, laoreet pretium libero. Sed id aliquam metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque lectus sem, placerat sed massa vitae, luctus egestas augue.

In elementum pretium diam, non ultrices orci porttitor eget. Ut ultricies nulla risus, pretium bibendum diam vehicula nec. Vivamus at bibendum purus. Nam ut iaculis nisi. Nam scelerisque purus eget ornare hendrerit. Suspendisse rutrum iaculis velit, quis cursus ex elementum non. Duis non pulvinar risus. Sed posuere metus ullamcorper libero ultrices fermentum. Sed eu pharetra libero.

Generated 5 paragraphs, 439 words, 2957 bytes of Lorem Ipsum

help@lipsum.com
Privacy Policy
</p>
        </div>
        <div className="footer">
            <ul className="footer-list">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Rules of Conduct</a></li>
                <li><a href="#">Advertise on Warzone Society</a></li>
            </ul>
        </div>
        </div>
     
    )
  }

  export default About;