(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{24:function(t,a,e){},33:function(t,a,e){},34:function(t,a,e){},52:function(t,a,e){},53:function(t,a,e){},54:function(t,a,e){},55:function(t,a,e){"use strict";e.r(a);var n=e(1),o=e(0),c=e.n(o),i=e(8),s=e.n(i),r=(e(33),e(20)),d=e(21),u=e(26),l=e(25),p=(e(34),e(23)),h=e.n(p),j=(e(52),e(57)),g=e(60),b=e(58),O=e(59),v=function(t){var a=t.location.lat,e=t.location.lng;return Object(n.jsx)("div",{children:Object(n.jsxs)(j.a,{center:[a,e],zoom:15,scrollWheelZoom:!0,position:[a,e],doubleClickZoom:!0,className:"Maps",children:[Object(n.jsx)(g.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(n.jsx)(b.a,{position:[a,e],children:Object(n.jsx)(O.a,{children:"You are here!"})})]})})};e(53);var f=function(t){var a={output:[{header:"IP ADDRESS",pg:t.outPutAdddress},{header:"LOCATION",pg:t.outPutLocation},{header:"TIME ZONE",pg:t.outPutTimezone},{header:"ISP",pg:t.outPutIsp}]};return Object(n.jsx)("div",{className:"Output",children:Object(n.jsx)("div",{className:"OutputIp",children:a.output.map((function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:t.header}),Object(n.jsx)("p",{children:t.pg})]})}))})})},x=(e(54),e.p+"static/media/icon-arrow.2eaaa5ee.svg");var m=function(t){return Object(n.jsxs)("div",{className:"UserInputLayout",children:[Object(n.jsx)("h1",{children:"IP Address Tracker"}),Object(n.jsxs)("div",{className:"UserInput",children:[Object(n.jsx)("input",{placeholder:"Seach for any IP address or domain",value:t.value,onChange:function(a){t.onTextChange(a)},getlocationdata:t.getLocationData}),Object(n.jsx)("div",{className:"ImageBox",onClick:function(){t.getlocationdata("ipAddress",t.currentIpAddress)},children:Object(n.jsx)("img",{src:x,alt:"submit arrow"})})]})]})},I="at_b1whTuwhPQvKXCWub8z2Hh3Kj2rcQ",D=function(t){Object(u.a)(e,t);var a=Object(l.a)(e);function e(){var t;Object(r.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=a.call.apply(a,[this].concat(o))).state={showMap:!1},t.getLocationData=function(a,e){var n;t.setState({showMap:!1}),n="ipAddress"===a?"https://geo.ipify.org/api/v1?apiKey=".concat(I,"&ipAddress=").concat(e):"domain"===a?"https://geo.ipify.org/api/v1?apiKey=".concat(I,"&domain=").concat(e):"https://geo.ipify.org/api/v1?apiKey=".concat(I),h.a.get(n).then((function(a){t.setState({showMap:!0,locationData:a,currentIpAddress:a.data.ip})})).catch((function(t){console.log(t)}))},t.updateTextValueHandler=function(a){t.setState({currentIpAddress:a.target.value})},t}return Object(d.a)(e,[{key:"componentDidMount",value:function(){this.getLocationData()}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"Tracker",children:this.state.locationData&&Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{onTextChange:this.updateTextValueHandler,value:this.state.currentIpAddress,getlocationdata:this.getLocationData,currentIpAddress:this.state.currentIpAddress}),this.state.showMap&&Object(n.jsx)(v,{location:this.state.locationData.data.location}),Object(n.jsx)(f,{outPutAdddress:this.state.locationData.data.ip,outPutLocation:"".concat(this.state.locationData.data.location.city,", ").concat(this.state.locationData.data.location.country," ").concat(this.state.locationData.data.location.postalCode),outPutTimezone:this.state.locationData.data.location.timezone,outPutIsp:this.state.locationData.data.isp,location:this.state.locationData.data.location})]})})}}]),e}(o.Component),y=e(24),A=e.n(y);var P=function(){return Object(n.jsx)("div",{className:A.a,children:Object(n.jsx)(D,{})})},T=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,61)).then((function(a){var e=a.getCLS,n=a.getFID,o=a.getFCP,c=a.getLCP,i=a.getTTFB;e(t),n(t),o(t),c(t),i(t)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),T()}},[[55,1,2]]]);
//# sourceMappingURL=main.7a321d7c.chunk.js.map