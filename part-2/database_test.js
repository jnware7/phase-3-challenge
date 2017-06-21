const {expect} = require('chai')
const query = require ('./database.js')


describe('itemsInSection()', function(){

  it('should be a function', function(done){
    query.itemsInSection()
      .then((results) => {
        expect(results).to.be.a('array')
        done()
      })
      .catch((error) => {
        expect(error).to.be.a('object')
        done()
      })
  })

  it('A call to itemsInSection("bulk") returns the items "Flour", "Pasta", and "Rice")', function(done){
    query.itemsInSection("bulk")
      .then((results) =>{
        expect(result).to.equal("Flour", "Pasta", "Rice")
        done()
      })
      .catch((error) => {
        expect(error).to.be.a('object')
        done()
    })
  })
})


describe('cheapItems()', function(){

    it('should be a function', function(done){
      query.cheapItems()
        .then((results)=>{
          expect(results).to.be.a('function')
          done()
        })
        .catch((error) => {
          expect(error).to.be.a('object')
          done()
      })
    })

//     it('A call to cheapItems() returns the item Fish as the first item and Honey as the last item', function(done){
//       expect(query.itemsInSection("bulk")[0]).to.equal("Fish")
//       expect(query.itemsInSection("bulk")[x.length-1]).to.equal("Honey")
//     });
// });
 })


describe('itemsInSection()', function(){

  it('should be a function', function(done){
  query.itemsInSection()
    .then((results)=>{
      expect(results).to.be.a('function')
      done()
    })
      .catch((error) => {
        expect(error).to.be.a('object')
        done()
    })
  })

  it('A call to countItemsInSection("packaged") returns 5 ', function(done){
    query.itemsInSection("packaged")
      .then((results) =>{
        expect(result).to.equal(5)
        done()
      })
      .catch((error) => {
        expect(error).to.be.a('object')
        done()
    })
  })
})
