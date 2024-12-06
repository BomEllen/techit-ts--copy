import{r as l,i as d,n as g,a as u,b as m,x as p,t as h}from"./Header-G1zuKWyi.js";import{g as f}from"./getPbImageURL-Cbpj-qJS.js";import{g as w}from"./index-DjKJqAo0.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,c=(t,e,o,s)=>{for(var a=s>1?void 0:s?v(e,o):e,i=t.length-1,n;i>=0;i--)(n=t[i])&&(a=(s?n(e,o,a):n(a))||a);return s&&a&&b(e,o,a),a};let r=class extends m{constructor(){super(...arguments),this.data={items:[],page:0,perPage:0,totalItems:0,totalPages:0},this.loginData={}}connectedCallback(){super.connectedCallback(),this.fetchData()}async fetchData(){const e=await(await fetch("https://the-green-of-summer.pockethost.io//api/collections/products/records")).json();this.data=e,this.loginData=JSON.parse(localStorage.getItem("auth")??"{}")}updated(t){super.updated(t);const e=this.renderRoot.querySelectorAll(".product-item");e.length>0&&w.from(e,{y:30,opacity:0,stagger:.2})}render(){const{isAuth:t}=this.loginData;return p`
      <div class="container">
        <ul>
        ${this.data.items.map(e=>p`
          <li class="product-item">
            <a href="${t?`/src/pages/detail/index.html?product=${e.id}`:"/"}">
              <figure>
                <img src="${f(e)}" alt="" />
              </figure>
              <span class="brand">${e.brand}</span>
              <span class="description">${e.description}</span>
              <span class="price">${e.price.toLocaleString()}원</span>
              <div>
                <span class="discount">${e.discount}%</span>
                <span class="real-price">${(e.price-e.price*e.discount*.01).toLocaleString()}원</span>
              </div>
            </a>
          </li>
          `)}
        </ul>
      </div>

      <a class="new-post" href="/src/pages/newPost/">+ 상품추가</a>
    `}};r.styles=[l,d`
      .container {
        margin: 0 auto;

        & img {
          width: 100%;
        }

        & ul {
          display: grid;
          place-items: center;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
          margin: 2.5rem;

          & li {
            & a {
              max-width: 30vw;
              display: flex;
              flex-direction: column;
              gap: 0.6rem;
            }
          }

          .description {
            font-size: 0.8rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .price {
            color: gray;
            text-decoration: line-through;
          }

          .discount {
            font-size: 1.2rem;
            color: red;
          }

          .real-price {
            font-weight: bold;
          }
        }
      }

      .new-post{
        padding: 0.5rem 1rem;
        background-color: dodgerblue;
        color:white;
        border-radius: 20px;
        position: fixed;
        left:50%;
        transform: translateX(-50%);
        bottom: 2rem;
        
      }
    `];c([g({type:Object})],r.prototype,"data",2);c([u()],r.prototype,"loginData",2);r=c([h("product-list")],r);
