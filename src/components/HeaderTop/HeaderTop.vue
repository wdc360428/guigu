<template>
    <div class=".header">
        <header>
            <slot name='left'></slot>
            <h3 class="content expll">{{title}}</h3>
            <slot name='right'></slot>
        </header>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style scoped>
.header {
    z-index: 1000;
}
    header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: green;
    display: flex;
    justify-content: space-between;
}
a {
    text-decoration: none;
}
header span {
    display: inline-block;
}
header .left {
    text-align: center;
    width: 40px;
    line-height: 40px;
    color: #fff;
}
header h3 {
    display: flex;
    flex: 1;
    box-sizing: border-box;
    justify-content: center;
    line-height: 40px; 
    color: #fff;
    text-align: center;
}
.expll {
    display: -webkit-box;
    display: -moz-box;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:1; 
}
header .right {
    width: 100px;
    text-align: center;
    line-height: 40px;
    color: #fff;
}
</style>