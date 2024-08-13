<template>
    <div>
        <h3>조건 디렉티브</h3>
        <h4>v-show, v-if</h4>
        
        <label for="price">가격 입력 : </label>
        <input type="text" id="price" v-model.number="price">
        <br>
        <!-- <span v-show="price < 0">가격을 음수로 입력할 수 없습니다.</span> -->
        <span v-if="price < 0">가격을 음수로 입력할 수 없습니다.</span>
        
        <h4>v-if, v-else-if, v-else</h4>
        
        <label for="score">점수 입력 : </label>
        <input type="number" id="score" v-model.number="score">

        <br>

        <template v-if="score > 0">
            점수에 해당하는 등급은
            <span v-if="score >= 90">A</span>
            <span v-else-if="score >= 80">B</span>
            <span v-else-if="score >= 70">C</span>
            <span v-else-if="score >= 60">D</span>
            <span v-else>F</span>
            입니다.
        </template>

        <h3>반복 디렉티브</h3>
        <h4>v-for</h4>
        <h5>학생 목록 출력</h5>
        <table border="1">
            <tr>
                <th>인덱스</th>
                <th>학번</th>
                <th>이름</th>
                <th>수학 점수</th>
                <th>영어 점수</th>
            </tr>
            <!-- <tr v-for="student in students" :key="student.no"> -->
            <tr v-for="(student, index) in students" :key="student.no">
                <td v-text="index"></td>
                <td v-text="student.no"></td>
                <td>{{ student.name }}</td>
                <td v-text="student.math"></td>
                <td>{{ student.eng }}</td>
            </tr>
        </table>

        <h5>회원 정보 출력</h5>
        <table border="1">
            <tr>
                <th>속성명</th>
                <th>속성값</th>
            </tr>
            <tr v-for="(value, key) in user" :key="key">
                <td v-text="key"></td>
                <td v-text="value"></td>
            </tr>
        </table>

        <h3>기타 디렉티브</h3>
        <h4>v-pre</h4>
        <span v-pre>{{ user.name }}</span>

        <h4>v-once</h4>
        <span v-once>{{ user.name }}</span>
    </div>
</template>

<script>
    export default {
        name: 'Directive2',
        data() {
            return {
                price: 0,
                score: 0,
                students: [
                    {no: 'S001', name: '홍길동', math: 70, eng: 80},
                    {no: 'S002', name: '이몽룡', math: 80, eng: 90},
                    {no: 'S003', name: '성춘향', math: 90, eng: 100},
                    {no: 'S004', name: '김철수', math: 100, eng: 90},
                    {no: 'S005', name: '김영희', math: 90, eng: 80}
                ],
                user: {
                    no: 1,
                    id: 'hong123',
                    name: '홍길동',
                    age: 34,
                    email: 'hong123@naver.com'
                }
            }
        },
    }
</script>