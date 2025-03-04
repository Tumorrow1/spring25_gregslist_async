export class House {
  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
    this.id = data.id
  }

  get houseCard() {
    return `
    <div class="row bg-light shadow house-boarder mb-1">
          <div class="col-md-4">
            <img
              src="${this.imgUrl}"
              alt="poolhouse" class="img-fluid">
          </div>
          <div class="col-md-8">
            <div class="d-flex flex-column justify-content-between h-100">
              <div>
                <p class="fs-3 mb-1">${this.year} </p>
                <small>listed on ${this.createdAt.toLocaleDateString()}</small>
                <div class="d-flex mt-1 justify-content-between align-items-center">
                  <p class="fs-3">$${this.price.toLocaleString()}</p>
                  <p class="fs-4">${this.bedrooms}</p>
                  <p class="fs-4">${this.bathrooms}</p>
                </div>
                <div>
                  <p>${this.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
  }
}
//   "_id": "67c76b7385d6f1c2c2f48d38",
//   "bedrooms": 10,
//   "bathrooms": 14,
//   "levels": 5,
//   "imgUrl": "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxob3VzZXxlbnwwfHwwfHx8Mg%3D%3D",
//   "year": 1990,
//   "price": 10000000,
//   "description": "Modest house that Jake lives in",
//   "creatorId": "67c7497b9d0ebdf64186d8d6",
//   "createdAt": "2025-03-04T21:06:59.720Z",
//   "updatedAt": "2025-03-04T21:06:59.720Z",
//   "__v": 0,
//   "creator": {
//       "_id": "67c7497b9d0ebdf64186d8d6",
//       "name": "miata_brah",
//       "picture": "https://s.gravatar.com/avatar/66b461fd44fa4101dbb7d06e143fedbc?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmi.png",
//       "id": "67c7497b9d0ebdf64186d8d6"
//   },
//   "id": "67c76b7385d6f1c2c2f48d38"
// }