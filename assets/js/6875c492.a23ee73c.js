"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8610],{2568:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(7325),a=n(3672),i=n(5893);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.Z,{permalink:n,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.Z,{permalink:r,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},8389:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(9107),a=n(1116),i=n(5893);function r(e){let{items:t,component:n=a.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.n,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},4883:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(7294);var s=n(512),a=n(7325),i=n(3777),r=n(5463),l=n(3702),o=n(4791),c=n(7306),d=n(2568),g=n(3647),h=n(8389),u=n(9501),p=n(3899),m=n(5893);function x(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.d,{title:n}),(0,m.jsx)(g.Z,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:s,listMetadata:i}=e;const r=x(t);return(0,m.jsxs)(c.Z,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(u.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.Z,{as:"h1",children:r}),(0,m.jsx)(o.Z,{href:t.allTagsPath,children:(0,m.jsx)(a.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(h.Z,{items:n}),(0,m.jsx)(d.Z,{metadata:i})]})}function f(e){return(0,m.jsxs)(r.FG,{className:(0,s.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(b,{...e})]})}},9501:(e,t,n)=>{n.d(t,{Z:()=>u});n(7294);var s=n(512),a=n(7325),i=n(1514),r=n(5893);function l(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(3702),g=n(9114);function h(e){let{className:t}=e;return(0,r.jsx)(g.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,s.Z)(t,d.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function u(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(h,{...e})]})}},7194:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var s=n(7325),a=n(512);const i={editThisPage:"editThisPage_U9Uk"};var r=n(5893);function l(e){let{editUrl:t}=e;return(0,r.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:(0,a.Z)("ThemeClassNames.common.editThisPage",i.editThisPage),children:(0,r.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})})}}}]);