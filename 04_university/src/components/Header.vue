<template>
    <header>
        <!-- <ul class="nav">
            <li class="nav-item">
                <RouterLink class="nav-link" to="/">HOME</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/departments">학과 목록 조회</RouterLink>
            </li>
        </ul> -->

        <!--
        명명된 라우터의 경우 v-bind 를 이용해서 to 속성에 문자열이 아닌 객체를 바인딩해야 한다.
        -->
        <ul class="nav">
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{name:'home'}">HOME</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{name:'departments'}">학과 목록 조회</RouterLink>
            </li>
            <!-- <li class="nav-item">
                <RouterLink class="nav-link" :to="{name:'departments/no',params:{no:'033'}, query:{name:'홍길동', age:22}}">학과 상세 조회</RouterLink>
            </li> -->
        </ul>
    </header>
</template>

<script setup>

</script>