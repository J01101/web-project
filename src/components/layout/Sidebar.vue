<template>
    <div class="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg">
        
        <div class="flex items-center pl-6 h-20 border-b border-gray-800">
            <img src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.0-9/117334168_2606581056324669_4951020710334194218_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFo4bRKc5SfTQvzhwotnTaOfj1P6rO41HF-PU_qs7jUcU1pCerqu3HUsOB0yKyJQwnrgz8Au7GZADcpedo6WgM4&_nc_ohc=DWpkI3p4RSUAX_hKF_Y&_nc_ht=scontent.fmnl13-1.fna&oh=c13c63ee952123b14f0da72b99ccecc8&oe=6087FEC5" alt="" class="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500">
            <div class="ml-1">
                <p class="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">경기도 관광</p>
                <div class="badge">
                       <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">Admin</span>
                </div>
            </div>
        </div>

        <div class="overflow-y-auto overflow-x-hidden flex-grow">

        <ul class="flex flex-col py-6 space-y-1">
            <li class="px-5">
                <div class="flex flex-row items-center h-8">
                    <div class="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase"><router-link to="/">MAP</router-link></div>
                </div>
            </li>
            <li class="px-5">
            <div class="flex flex-row items-center h-8">
                <div class="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Settings</div>
            </div>
            </li>  

            <!--지역 설정하기-->
            <li>
            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                </span>
                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">지역 선택</span>
            </a>
            </li>
            <!--지역선택-->
            <li>
            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                </span>
                 <div class="p-2"></div>
                 <form>
                    <select name="지역 선택" class="text-black bg-white" >
                      <option value="none">=== 선택 ===</option>
                      <option value="고양시" selected>가평군</option>
                      <option value="고양시">고양시</option>
                      <option value="과천시">과천시</option>
                      <option value="광명시">광명시</option>
                      <option value="광주시">광주시</option>
                      <option value="구리시">구리시</option>
                      <option value="군포시">군포시</option>
                      <option value="김포시">김포시</option>
                      <option value="남양주시">남양주시</option>
                      <option value="동두천시">동두천시</option>
                      <option value="부천시">부천시</option>
                      <option value="성남시">성남시</option>
                      <option value="수원시">수원시</option>
                      <option value="시흥시">시흥시</option>
                      <option value="안산시">안산시</option>
                      <option value="안양시">안양시</option>
                      <option value="양주시">양주시</option>
                      <option value="양평군">양평군</option>
                      <option value="여주시">여주시</option>
                      <option value="연천군">연천군</option>
                      <option value="오산시">오산시</option>
                      <option value="용인시">용인시</option>
                      <option value="의왕시">의왕시</option>
                      <option value="의정부시">의정부시</option>
                      <option value="이천시">이천시</option>
                      <option value="파주시">파주시</option>
                      <option value="평택시">평택시</option>
                      <option value="포천시">포천시</option>
                      <option value="하남시">하남시</option>
                      <option value="화성시">화성시</option>
                    </select>
                  </form> 
            </a>
            </li>
             <!--옵션 토글 만들기-->
             <li>
                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                    </span>
                    <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">관광지</span>
                     <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full">
                    <label for="toggleB" class="flex items-center cursor-pointer">
                         <!-- toggle -->
                         <div class="relative">
                            <!-- input -->
                             <input type="checkbox" id="toggleB" class="sr-only">
                             <!-- line -->
                             <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                             <!-- dot -->
                              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                </div>      
                       </label>
                      </span>
                </a>
             </li>
                        <li>
                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                    </span>
                    <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">주차장</span>
                     <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full">
                    <label for="toggleB" class="flex items-center cursor-pointer">
                         <!-- toggle -->
                         <div class="relative">
                            <!-- input -->
                             <input type="checkbox" id="toggleB" class="sr-only">
                             <!-- line -->
                             <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                             <!-- dot -->
                              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                </div>      
                       </label>
                      </span>
                </a>
             </li>
                <li>
                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                    </span>
                    <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">무인단속</span>
                    <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full">
                    <label for="toggleB" class="flex items-center cursor-pointer">
                         <!-- toggle -->
                         <div class="relative">
                            <!-- input -->
                             <input type="checkbox" id="toggleB" class="sr-only">
                             <!-- line -->
                             <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                             <!-- dot -->
                              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                </div>      
                       </label>
                      </span>
                </a>
             </li>
             <li>
                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                    </span>
                    <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">무인단속</span>
                    <!-- <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-blue-100 rounded-full">New</span> -->
                    <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full">
                    <label for="toggleB" class="flex items-center cursor-pointer">
                         <!-- toggle -->
                         <div class="relative">
                            <!-- input -->
                             <input type="checkbox" id="toggleB" class="sr-only">
                             <!-- line -->
                             <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                             <!-- dot -->
                              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                </div>      
                       </label>
                      </span>
                   </a>
              </li>
              <li class="px-5">
                <div class="flex flex-row items-center h-8">
                <div class="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase"><router-link to="/board/List">Review</router-link></div>
                </div>
            </li>  

                 
        </ul> 
    </div>
    </div>
</template>

<script>
export default {
	
}
</script>

<style scoped>

input:checked ~ .dot {
  transform: translateX(100%);
  background-color:white;
}

input:checked ~ .block {
  background-color:rgb(21, 247, 153);
}


</style>