import { Component } from 'react';
import unsplash from './api/unsplash';
import './App.css';

import SearchBar from './components/SearchBar.component';
import ImageList from './components/ImageList.component';

class App extends Component {
    state = {
        images: [],
    };

    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm },
        });
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <strong>Found: </strong>
                {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
