(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{276:function(t,e,o){"use strict";o.r(e);o(11);var r=o(45),l={name:"ContactForm",components:{ValidationObserver:r.a,ValidationProvider:r.b},data:function(){return{formData:{redirect:"https://portfolio.asifthewebguy.me/contact/",subject:"You have got a mail From Server",to:"asif.aumi@gmail.com",to_name:"Asif Chowdhury",name:"",from:"",phone:"",message:""}}},methods:{onSubmit:function(){var t=this;fetch("https://contact.asifthewebguy.me/sendMail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then((function(e){e.ok&&(window.location.href=t.formData.redirect)})).catch((function(t){console.log(t)}))}}},n=o(19),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[o("form",{staticClass:"mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-1 sm:gap-x-8",attrs:{action:"https://contact.asifthewebguy.me/sendMail",method:"POST"},on:{submit:function(e){return e.preventDefault(),r(t.onSubmit)}}},[o("input",{attrs:{type:"hidden",name:"redirect",value:"https://portfolio.asifthewebguy.me/contact/"}}),t._v(" "),o("input",{attrs:{type:"hidden",name:"subject",value:"You have got a mail From Server"}}),t._v(" "),o("input",{attrs:{type:"hidden",name:"to",value:"asifthewebguy@gmail.com"}}),t._v(" "),o("input",{attrs:{type:"hidden",name:"to_name",value:"Asif Chowdhury"}}),t._v(" "),o("div",{staticClass:"sm:col-span-2"},[o("ValidationProvider",{attrs:{name:"name",rules:"required|alpha_spaces",immediate:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("div",{staticClass:"flex justify-between"},[o("label",{staticClass:"block text-sm font-medium text-gray-900",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),o("span",{staticClass:"text-sm text-gray-500",attrs:{id:"phone-optional"}},[t._v(t._s(r[0]))])]),t._v(" "),o("div",{staticClass:"mt-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md",attrs:{id:"name",type:"text",name:"name",autocomplete:"given-name"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})])]}}],null,!0)})],1),t._v(" "),o("div",{staticClass:"sm:col-span-2"},[o("ValidationProvider",{attrs:{name:"from",rules:"required|email",immediate:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("div",{staticClass:"flex justify-between"},[o("label",{staticClass:"block text-sm font-medium text-gray-900",attrs:{for:"from"}},[t._v("Email")]),t._v(" "),o("span",{staticClass:"text-sm text-gray-500",attrs:{id:"phone-optional"}},[t._v(t._s(r[r.length-1]))])]),t._v(" "),o("div",{staticClass:"mt-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.from,expression:"formData.from"}],staticClass:"py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md",attrs:{id:"from",name:"from",type:"email",autocomplete:"email"},domProps:{value:t.formData.from},on:{input:function(e){e.target.composing||t.$set(t.formData,"from",e.target.value)}}})])]}}],null,!0)})],1),t._v(" "),o("div",{staticClass:"sm:col-span-2"},[o("ValidationProvider",{attrs:{name:"phone",rules:"phone|max:11|min:10",immediate:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("div",{staticClass:"flex justify-between"},[o("label",{staticClass:"block text-sm font-medium text-gray-900",attrs:{for:"phone"}},[t._v("Phone")]),t._v(" "),o("span",{staticClass:"text-sm text-gray-500",attrs:{id:"phone-optional"}},[t._v("Optional")]),t._v(" "),r[0]?o("span",{staticClass:"text-sm text-gray-500",attrs:{id:"phone-optional"}},[t._v(t._s(r[0]))]):t._e()]),t._v(" "),o("div",{staticClass:"mt-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md",attrs:{id:"phone",type:"text",name:"phone",autocomplete:"tel","aria-describedby":"phone-optional",maxlength:"11"},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}})])]}}],null,!0)})],1),t._v(" "),o("div",{staticClass:"sm:col-span-2"},[o("ValidationProvider",{attrs:{name:"message",rules:"required",immediate:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("div",{staticClass:"flex justify-between"},[o("label",{staticClass:"block text-sm font-medium text-gray-900",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),o("span",{staticClass:"text-sm text-gray-500",attrs:{id:"message-max"}},[t._v("Max. 500 characters")]),t._v(" "),r[0]?o("span",{staticClass:"text-sm text-gray-500",attrs:{id:"message-optional"}},[t._v(t._s(r[0]))]):t._e()]),t._v(" "),o("div",{staticClass:"mt-1"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.message,expression:"formData.message"}],staticClass:"py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md",attrs:{id:"message",name:"message",rows:"4","aria-describedby":"message-max",maxlength:"500"},domProps:{value:t.formData.message},on:{input:function(e){e.target.composing||t.$set(t.formData,"message",e.target.value)}}})])]}}],null,!0)})],1),t._v(" "),o("div",{staticClass:"sm:col-span-2 sm:flex sm:justify-end"},[o("button",{staticClass:"mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto",attrs:{type:"submit"}},[t._v("\n        Submit\n      ")])])])]}}])})}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,o){"use strict";o.r(e);var r={name:"ContactPage"},l=o(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container grid grid-cols-1 mx-auto divide-y-2 sm:mx-0 md:w-md"},[o("div",{staticClass:"max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},[o("div",{staticClass:"relative bg-white shadow-2xl rounded-3xl"},[o("h2",{staticClass:"sr-only"},[t._v("Contact us")]),t._v(" "),o("div",{staticClass:"grid grid-cols-1 xl:grid-cols-2"},[o("div",{staticClass:"relative overflow-hidden py-10 px-6 bg-black sm:px-10 xl:p-12 xl:rounded-l-3xl xl:rounded-tr-none rounded-t-3xl"},[o("div",{staticClass:"absolute inset-0 pointer-events-none sm:hidden",attrs:{"aria-hidden":"true"}},[o("svg",{staticClass:"absolute inset-0 w-full h-full",attrs:{width:"343",height:"388",viewBox:"0 0 343 388",fill:"none",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z",fill:"url(#linear1)","fill-opacity":".1"}}),t._v(" "),o("defs",[o("linearGradient",{attrs:{id:"linear1",x1:"254.553",y1:"107.554",x2:"961.66",y2:"814.66",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{"stop-color":"#fff"}}),t._v(" "),o("stop",{attrs:{offset:"1","stop-color":"#fff","stop-opacity":"0"}})],1)],1)])]),t._v(" "),o("div",{staticClass:"hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden",attrs:{"aria-hidden":"true"}},[o("svg",{staticClass:"absolute inset-0 w-full h-full",attrs:{width:"359",height:"339",viewBox:"0 0 359 339",fill:"none",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z",fill:"url(#linear2)","fill-opacity":".1"}}),t._v(" "),o("defs",[o("linearGradient",{attrs:{id:"linear2",x1:"192.553",y1:"28.553",x2:"899.66",y2:"735.66",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{"stop-color":"#fff"}}),t._v(" "),o("stop",{attrs:{offset:"1","stop-color":"#fff","stop-opacity":"0"}})],1)],1)])]),t._v(" "),o("div",{staticClass:"hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block",attrs:{"aria-hidden":"true"}},[o("svg",{staticClass:"absolute inset-0 w-full h-full",attrs:{width:"160",height:"678",viewBox:"0 0 160 678",fill:"none",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z",fill:"url(#linear3)","fill-opacity":".1"}}),t._v(" "),o("defs",[o("linearGradient",{attrs:{id:"linear3",x1:"192.553",y1:"325.553",x2:"899.66",y2:"1032.66",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{"stop-color":"#fff"}}),t._v(" "),o("stop",{attrs:{offset:"1","stop-color":"#fff","stop-opacity":"0"}})],1)],1)])]),t._v(" "),o("h3",{staticClass:"text-3xl font-medium text-white"},[t._v("Get In Touch")]),t._v(" "),o("p",{staticClass:"mt-6 text-base text-blue-50 max-w-3xl"},[t._v("\n            If you would like to get in touch with me, be it for exploring a\n            technology, a business, or to just say hi, feel free to send me an\n            email or use this contact form.\n          ")]),t._v(" "),o("dl",{staticClass:"mt-8 space-y-6"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("dd",{staticClass:"flex text-base text-blue-50"},[o("svg",{staticClass:"flex-shrink-0 w-6 h-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})]),t._v(" "),t._m(2)])]),t._v(" "),o("ul",{staticClass:"mt-8 flex space-x-12",attrs:{role:"list"}},[o("li",[o("a",{staticClass:"text-white hover:text-blue-100",attrs:{target:"_blank",href:"https://www.facebook.com/AsifTheWebGuy"}},[o("span",{staticClass:"sr-only"},[t._v("Facebook")]),t._v(" "),o("svg",{staticClass:"w-6 h-6",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[o("path",{attrs:{d:"M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1",fill:"currentColor"}})])])]),t._v(" "),o("li",[o("a",{staticClass:"text-white hover:text-blue-100",attrs:{target:"_blank",href:"https://github.com/asifthewebguy"}},[o("span",{staticClass:"sr-only"},[t._v("GitHub")]),t._v(" "),o("svg",{staticClass:"w-6 h-6",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[o("path",{attrs:{d:"M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12",fill:"currentColor"}})])])]),t._v(" "),o("li",[o("a",{staticClass:"text-white hover:text-blue-100",attrs:{target:"_blank",href:"#"}},[o("span",{staticClass:"sr-only"},[t._v("Twitter")]),t._v(" "),o("svg",{staticClass:"w-6 h-6",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[o("path",{attrs:{d:"M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209",fill:"currentColor"}})])])])])]),t._v(" "),o("div",{staticClass:"py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12"},[o("h3",{staticClass:"text-lg font-medium text-gray-900"},[t._v("Send me message")]),t._v(" "),o("ContactForm")],1)])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("dt",[o("span",{staticClass:"sr-only"},[t._v("Phone number")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("dt",[o("span",{staticClass:"sr-only"},[t._v("Email")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"ml-3"},[o("strong",[t._v("contact↬asifthewebguy.me")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ContactForm:o(276).default})}}]);