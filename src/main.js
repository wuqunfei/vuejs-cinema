import Vue from 'vue';
import './style.scss';
import genres from './util/genres.js'

new Vue({
  el: '#app',
  components: {
    'movie-list':{
      template: `<div id="movie-list">
                    <div v-for="movie in movies" class="movie"> {{movie.title}}</div>
                </div>`,
      data: function (){
        return {
          movies: [
            {title: 'PF'},
            {title: 'AF'},
            {title: 'BF'}
          ]
        }
      }
    },
    'movie-filter':{
      data: function (){
          return {
            genres: genres
          }
      },
      template: `<div id="movie-filter">
            <h2>Filter Results</h2>
            <div class="filter-group">
              <check-filter v-for="genre in genres"></check-filter>
            </div>
      </div>`,

      components: {
         'check-filter': {
           template : `<div>Filter</div>`
         }
      }
    }
  }
});
