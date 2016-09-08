<template>

  <div class="ui container">
    <div class="ui piled segment">
      <div class="mainDisplay">
          <h1 class="ui header mainTitle teal ">Reverland's Playground <div class="sub header">Sub Header</div>
          </h1>

          <div class="ui three column grid">
              <div class="column"></div>
              <div class="column">
                <div class="ui card">
                    <div class="image">
                      <img src="/static/img/240.jpg">
                    </div>
                    <div class="content">
                      <a class="header">Kristy</a>
                      <div class="meta">
                        <span class="date">Joined in 2013</span>
                      </div>
                      <div class="description">Kristy is an art director living in New York. </div>
                    </div>
                    <div class="extra content">
                      <a><i class="user icon"></i> 22 Friends </a>
                    </div>
                  </div>
              </div>
              <div class="column"></div>
          </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<style>
.mainDisplay {
  clear:both;
  margin:0 auto;
}
.mainTitle {
  text-align: center;
}
</style>