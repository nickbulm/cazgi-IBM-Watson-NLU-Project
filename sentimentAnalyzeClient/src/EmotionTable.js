import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {

    
    render() {
      console.log(emotions)
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                this.props.emotions.map(emotion => 
                <tr><td>{emotion}</td></tr>        
                  )
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
