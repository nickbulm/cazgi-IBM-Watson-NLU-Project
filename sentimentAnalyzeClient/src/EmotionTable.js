import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {

    
    render() {
      console.log(this.props.emotions)
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                Object.entries(this.props.emotions).map(([k, v], i) => 
                <tr><td>{k}</td> <td>{v}</td></tr>        
                  )
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
