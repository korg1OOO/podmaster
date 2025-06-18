import React from 'react';

// Define the category interface
interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Categories: React.FC<{ onCategorySelect: (category: string) => void }> = ({ onCategorySelect }) => {
  const categories: Category[] = [
    {
      id: 1,
      name: 'Pod Descartável',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsgu9j75pnt9t7ytXKXEOn4z9viSXKdMFTA&s',
      description: 'Pods descartáveis de diversas marcas e sabores',
    },
    {
      id: 2,
      name: 'Pod Premium',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBazSlEw7gaGYJuxLxZWVTmEIUerfWMF7Udg&s',
      description: 'Pods premium com alta capacidade de puffs',
    },
    {
      id: 3,
      name: 'Refil',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzO9bLVx59q7_bXbAJ8CGBNkKUDQQ2h7Sq7Q&s',
      description: 'Refis para dispositivos recarregáveis',
    },
    {
      id: 4,
      name: 'Acessório',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDRANDw8QDw8NDQ8QEBAPDw0PFREXFhURFRUYHSogGBolGxYVITEhJSkrLi4uGB81ODMsNyguLi0BCgoKDg0OFRAQFy0dFR0rKystKy0rKystNysrLSsrLSsrLSsvKy0tKy03LS0rKzcvLS0rLSsuLSstLS0tLSsrLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUHBgj/xABHEAACAgEBBAUFCwkHBQAAAAAAAQIDBBEFEiExBgdBUWETInFzgQgUJDI1kaGxtMHRIzRCUmJydJKzQ2OCorLC8SVEZISU/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECBAMGBf/EADERAQEAAwABAwIDBQgDAAAAAAABAgMRBBIhMQVRE0GBIjJhkbEjQlJicXKh4QYVNP/aAAwDAQACEQMRAD8A7iAAAAAADz3Szpng7Linl2/lJJuuitb91nio/or9qWi8QOT7a67MyxyWFTRjw182Vid1rXjxUU/DRmuJWis609sy/wC73f3aaF/tLyJ2rFvWLtafxs6//D5Ov/TFDkPdhX9Ms98ZZuc34ZFq+pj2RjS6YZ3Zl53ty7/xAofTHaPZmZq/9rIf+4Cqnpvtat6w2hmp+N05r5ptoi9brA63Nt1Nb2RVeu6+it6+2G6/pJw69/0X67ce3SG1KXiyfDy9W9bj/wCKPxof5vSOL11XDy6rq420WQtrmt6FlclOE13prgyKvAAAAAAAAAAAAAAAAAAAB5DrK6aQ2Ti70d2eXcpQxKny3tONsl+pHVel6Lt1RK+Y8/NtvtsuvnO22yW/ZZN6ynLvf1ackloinVjUAmXqcTvDpxRZPhqBCZFSBDCCYK2GEVHoejfSbL2Vb5TCs0rlLeuxp6vHv9K/Ql+1Hj6VwFi9fQPQvpli7Wp8pjvctgl74xpteVol/ui+yS4PweqMtPRgAAAAAAAAAAAAAAAAESkkm20klq2+SXeB8odPekUtpbQyMltuvedWKuyOPBtQ0/e4zfjJljNecKAAFQEUzjqmgfCmEiNJbKIbB1CfEJWzwgjIzH5pRh7I2zkYV8MjFslVbB+ZOPd2xkuUovtTM1Y+murjpzVtjH1ajXl1JLKpT4ceVtevOD+jk+9xp7AAAAAAAAAAAAAAAAB5nrK2i8XZGfbF6S8g6YPuna1VF/PNAfKrRWajQqIaAaBQCNCC3OPaVVveAakCL4lG0wmGV7NfmgaSfMjUbPo5tzIwMivJxZ7ltb83XjGcX8aua7YvtX3pMD6p6E9K6NrYkcinzZrSGRS2nKi3TjF967U+1e1EV6AAAAAAAAAAAAAAADwfXdLTYmR424if/wBEH9wHzYzRFOq7wDDPEAAJCoaAxrI6Pw7CUUahUxfEI2eEysruc+AGnkRpCA9L0G6V37Ly4ZFLco8IZNOukcinXjF90lzT7H4NgfVWw9sUZ2PXlYs1OqxaxfJxfbCS7JJ8GiKzwAAAAAAAAAAAAAeC67/kS/12L/XgB867OoVl9Vb5SmlLxiuLXzJk2ZenG10+Dqm7ydevL4t9/wCrdw2xXfZ73tpgqZS8lW0/Og9dIvTs7OXI5rpywx9cvu+hx+p6fJ23xdmqTXb6Zfzn2eeyKnXOcHzhKUH46PTU68b2SvmfI1XVsy135xti0V4gEhQCmcdVowMScdHoyCmIGyw5FRXmz4AjVsigEpge66sendmycjz96eHc0sqlcXF8lfBfrJc1+kuHYtCT2fT+JkwurhbVKNldkY2Vzi9YzhJaqSfc0RpdAAAAAAAAAAAADwXXf8iZHrsX7RAD522bkKq+uyWu7GWr0Wr00a+8meNyxsjq8Hdjp8jXsy/dl922pq2dKcZwvnW4zU1GTcU2nrp5y+85rlukuNnX72vT9Lz2Y7MNlxve+/tPnv5xqdsTUsi6UWnFzbTT1T4Lkzo1TmElfh/U8scvL25Y3stYZ6OEAkKBKBVq2vVePYFYpkZuLI0zUZUxSMNkUAlAVRloB1jqe6xPeU44ObP4HbPSmyT4Ydsnyb7K5Pn+q3rybBH0KRQAAAAAAAAAAAeC67/kTI9di/aIAfO2zqFZfVCXKVkVLxXNr6CbL6cLXT4OqbfJ14ZfFrdR2zXfZ73tqgqZT8lBr40HrpF+HHTlyOb8G4z1y+76CfVNXkbb423VPwrfTPvPyjz+XQ6rJ1y5wnKD8dHzOrHL1SX7vmvI1XTty13+7eLJp4gACQoBBFWL6+1c+3xAnHkVmqL5EpFgjSUVEgSBXCenofNAd96kunrujHZeZPW2EfgNsnxuqS40tvnKKWq74/u8VI6+RQAAAAAAAAAA8H13/ImR67F+0QA+ccS/ydtdn6k4yfik+K+bUZY+rGx7eNu/B3YbP8Nlb6rYG9dG6qyt4zmr97V70YqW848tPDXU5rv5j6bP2vh9BPpHq3zfrzl02+rv5/fjSbVyFbfdZH4srJOPjHkn9Gp0a8eYyPwfO247fI2Z4/Fv/TENuUAASgQCgEAWLI7vFcvqAsTZCKSKATqBJUTqBkYOTOucJ1ycLK5xtqmvjQnFqUZLxTSYK+tegPSaO1MCnKWis41ZMF/Z3x03l4J6qS8JIivRAAAAAAAAAAHg+u75EyPW4n2iAHzps+lWXVQlylZBSXeteKJneY2x0eFrx2+Rr15fFsbHa3k7KPK0w8ioXuiyEeEJrTWMtFw14L5zx1dmXMvfs6/W+o3Vu8e7dOPomOVxsnxf48jT0USsluwWstG9NYx4Javi3pyOi2Sdr8PVpz25ejCdqLq5Qk4zTjJcGn2cNRL2dibMMteVxznLFBWAABIVAEBFW5r+HeBhXVOPo+olVbIoAAATqBNfxkVHcfc55kvKbQx9fM3KMhLunrKEn7Vu/wAopHbyKAAAAAAAAAPB9d3yJketxPtEAPnHGvddkLEk3CSno+GunYMsfVjY9PH3XRtw2yduN63cdsYdkHXdRKuMpKyXktNN/TTe83R/Qc34OzG9xvX0H/tfB367r26rjLe3n3+/tytJkSjG2TxpTUFL8lPWUZ7unPXg12nTO3H9r5fg7bhjuyui30/lfzWbLHNuUpOUnxcm9W/aWTjxzzyzyuWV7apKyAAAVAQArqCMqWMprhwl9D9JRrcjDcXppo+58vYzNjXWNKDXNMikYt8kwLkceXboi8Tq5HGXa39ReJ1chWlyQPl173Oy+GZ/8NT/AFJEqx3cigAAAAAAAADwfXd8iZHrcT7RAD5yw6VZbXW20pzjBtc1qTO+nG17eLpm7fhrt5MrxlW7GtWrg4Sj74eLFt6Sc97RNrTgvaZm6frzrs2/StuNtxsuPq9M/wBWM/KY1zTSVlblCSeko8Y6NeKaZv2zx/g4/wC08TdZ7erH2+8Wsm92TlOSinLRtRTS4JLhq/AYzk489227c7nZy37LRp5gAAwIAAXKgjY45RduimtGk14gay6lLlqQWdAGgXiUgqQOte54/PM/+Gp/qSMq7sAAAAAAAAAAeD67vkTJ9bifaIAfOmzp7t9L0b0sg9IrWT48ku8zsncK6fBy9Pk6sud5Z8PX1ZOHY1DyirlG9XuEm6p+WT14qfjzRxenZPfn5Psvx/B2/szL05TL1cvte/q81tq2Kzb5ShGyO+9YttKScEua5d+p2a5/Zz8nynnbMcfN2ZXH1Y9+P0jW3Si5Nwi4R4aRct9rgteOi146v2npO893BsuFytwnMfsoKwAAQAgABcqCNhjlGRZyA1+QBikWAVIADrXuePzzP/hqf6sjKu7AAAAAAAAAAHhOu35EyfW4n2mAHzpsz84o9dX/AKkZ2/uV1/T/AP6tX+6N9tjZDdV01Vv2yyHOLgnKbqenDRe3gc+rbPVJ324+g+p/Tcrp25zDuy59nPe8eWlFxejTi1waa0a8Guw7Hydll5ZyxAQAAAAVAQArqCNjjFF+zkBr8gDFIsSFSAA617nj88z/AOFp/qyMq7sAAAAAAAAAAeE67fkTJ9bifaawPnDEjrbWt5w1sgt9PRw85ecn2aDP92vbxcfVuwnfT2z3+z2UKM2vjVdVfHmo3Q3ZaeEoc/afn9135nK+2unztU7r2zZj/mnL/OPJbZnOWRc7YqE3Pz4KW8ovRcn2nfr56Zx8Z59zvk7LnOZd94wjbkAAEASFQEAK6wjY45Rfs5Aa+8DG7SKkKAAOt+53XwvP/hqP6kjKu6gAAAAAAAAAHhOu35DyfW4n2msD5thW5yjCOmspKC14LVvRalt5Ota9d2ZzDH5vs2eNh5lFlcdL64uyMG63vwSckm+GsVw70eGWevOX4fr6vF+oeLtwx/axxtk9vec/p/wxduxayrlKTm1PjJqKcvNXNJaHpq/cjh+pSzytkt7e/P6ME9HEAACBAKgJQCusI2OOUXrOQGBeBjEVIUAAdd9zuvhW0P4fH/qTMq7mAAAAAAAAAAeE67PkPJ9ZifaawPmtTcZKUXo4tSi+5rimXnZxcc7hlMsfaxusXpRfDhZGFq7/AIkvnXD6Dny8XC/Hs/d0f+ReRh7bJM5/KtXtLJV11lqTiptPR8WuCX3Hthj6cZH5Hmb5v357ZOTJjG3MAQBKBAKgIAV1hGwxyi/ZyAwLwMYipCgEog697nZfCNo+pxv9dhFdxAAAAAAAAAAPC9di/wCh5XrMT7TWB80S5lZqCgAAAQBKBAKgIAV1hGwxyi/ZyA195BjhUhREEgdg9zqvy+0n/dYi/wA1pFdvAAAAAAAAAAPHdb9W/sPPXdGmf8mRXL7gPl6Ue7h9RWajV/8ABQ3gJAAQAAAAAFdYRn0FF+zkBgXgY5FiQqdCCQOx+51j5+0n+ziL6bSK7WAAAAAAAAAAec6x6lPY+00+zCvn7Ywcl9KQHylPmVmqSiGgI07vxAav/gAmBIAAAArrCM/HKL9nIDAuIMdBYqRFSAA7R7nWPDaT8cVfRYRXZgAAAAAAAAADV9KqPK7Pzq9G9/EyYaLm9apLgB8hN66PvWpWagogAAANARp3fiA18PmAJgSBXWEZ9BRes5AYN5BjrmFioio3u7j6PxAnR+j0cQO2+51jpVtF/wB7jr/JMiuxAAAAAAAAAAFNkFJOL5NNP0MD482zs94uTkY0tU6LraOPNqE2k/akn7SpWEVEAAAAAAAhrvCI07n94VXBvu19D/EIzqbF2qXza/UBdncv2v5ZfgUYd0u5P6F9ZBYWvgvpI1FSgu3j6QKgJA7h7ndfB9oP/wAilfNVr95FddAAAAAAAAAAAHB+vvow6siG0qo/k8jdqydOUL4rSEn3b0Ul6YeJYjkpUAoACdAAAHEAAiqAGVWUXZgYtpBbiRqKgJAAd19zxH4HnPvy4r5qIfiRXWAAAAAAAAAAABgbd2RTnY12LkR3qroOEu+L5xmu6SaTT70gPlfpd0Xydl5MsfJWq4ui5LSvJrX6cfHlrHsfsbrNaQqoCJAAQAB0IIKiuAGVUUXJgY1pBbiKqoipAID6Q6lNkvG2RXOS0ll22ZjX7EkoVv2whF+0ivegAAAAAAAAAAABrtvbDxs+mWPmVRtrlx0fCUJdkoSXGMvFAcS6U9TGZQ5T2bOOXTq3GqbjXkxXdq9IT9OsfQXqcc1z8C7HsdWRVbRauddsJQl6UnzXiuBRi6AQEAgBAACqAGXWBcmUY1pBbiK1FZAA2GwNkWZ2VRiUpud9ig2v7OH6dj8Ix1fsA+ucaiNcIVwWkIQjXBd0YrRL5kRVwAAAAAAAAAAAAAADC2rsnGy6/JZdFORXz3bYRmk+9a8n4oDmfSTqSxrE57NunjT7KbnK6h+iT8+Ppbl6AOV9I+gu0tn70srGn5JPTy9P5alrvco8Yr95IsqPNadxU4gIgABKYF6NgFTuAtTmAgGlWpE6u4uPZbOFVMJ2Wzko11wTlOcu5JcwPovqq6BLZdLuylB59y0sae8serg1TF+lJya5vTsSI098AAAAAAAAAAAAAAAAAAAHj+kfVpsrOcpzx1RdLVu7GfkZtv8ASlFebJ/vJgcz6R9SeXSpTwLoZcVx8lNKm/TuT13ZP+UvU45hnYNtFjqvrsptjzrthKuaXfpJa6eISxjtFRAEgNQCQGTiYtls41UwnbZLhGuuMpzl6IriwOjdGuprPyNJ5soYNb47r0uyGv3Yvdj7Xr4E61x2Lon0KwNlxfvSr8rJJWZFj8pfPw3n8Vfsx0XgRXogAAAAAAAAAAAAAAAAAAAAAAGv2xsTEzYeTzKKb4disgpOPjF84vxQHMukvUhRNSnsy+VEuLVF7dtLfcrPjx9L3i9TjmW2Orza+I2rcK+cVysx174hJd63NWvakE40EtnXp7sqb4y5brqsUvma1KcbfZPQjamU0qMHKab03rIOiC8d6zRfMTpx0vov1IpaT2rfr2+98ZtL0Sta1foil6R1eOqbD6P4eBDyeFj1UR/ScI+fPxnN+dJ+LbIrZgAAAAAAAAAAAAAAAAAAAAAAAAAAAgCQAAAAAAAAAAAAAAP/2Q==',
      description: 'Acessórios para cigarros eletrônicos',
    },
  ];

  return (
    <section id="categorias" className="py-12 bg-white rounded-2xl shadow-lg">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
          Nossas Categorias
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Explore nossa seleção completa de produtos premium
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-sm">{category.description}</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50">
              <button
                onClick={() => onCategorySelect(category.name)}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Ver Produtos
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;