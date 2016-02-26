

var ProductTable = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired,
  },
  loadProductsFromServer: function() {
    var self = this;
    $.ajax({
      url: this.props.url,
      method: 'GET'
    }).done(function(data){
      self.setState({data: data})
    })
  },
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadProductsFromServer();
  },
  render: function() {
    return (
      <div>
        <ProductList products={this.state.data} />
      </div>
      )
  }
});


{/* 
Filter through products and map only products in stock..
Replace the table body section with dynamic data.
*/}  

var  ProductList = React.createClass({
  render: function() {
    var stocked = this.props.products.filter(function (i) {
      return i;
    }).map(function (e) {
      return (
          <tr>
            <td> {e.name} </td>
            <td> {e.cost} </td>
            <td> {e.inStock.toString()} </td>
          </tr>
         ) 
    })
        return (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>product</th>
                <th>cost </th>
                <th> inStock </th>
              </tr>
            </thead>
            <tbody>
                    { stocked }
            </tbody>
          </table>
        </div>
      )
  }
});

React.render(
  <ProductTable url="/api/products" pollInterval={2000} />, 
  document.getElementById('react-container'));
{/* WHICH URL IS USED TO GET ALL PRODUCTS? */}